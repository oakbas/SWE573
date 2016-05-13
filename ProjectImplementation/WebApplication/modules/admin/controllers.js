/**
 * Created by ozlemakbas on 12/05/16.
 */

'use strict';

angular.module('Admin', ['ui.bootstrap'])

    .controller('AdminController',
        ['$scope', 'AdminService',
            function ($scope, AdminService) {
                $scope.data = { memberList: [],
                                producerList: [],
                }

                $scope.init = function(){

                    AdminService.getMembersForApproval(function (response) {
                        if(response.status == '200') {
                            $scope.data.memberList = response.data;
                        }
                    });

                    AdminService.getAllProducers(function(response){
                        if(response.status == '200'){
                            $scope.data.producerList = response.data;
                        }
                    });
                }

                $scope.init();

                $scope.getAllProducers = function() {
                    AdminService.getAllProducers(function(response){
                        if(response.status == '200'){
                            $scope.data.producerList = response.data;
                        }
                    });
                }

                $scope.getMembersForApproval = function (){

                    AdminService.getMembersForApproval(function (response) {
                        if(response.status == '200') {
                            $scope.data.memberList = response.data;
                        }
                    });
                }

                $scope.approveMember = function(memberObject) {
                    memberObject.membership = true;
                    AdminService.memberApprove(memberObject, function(response){
                        if(response.status == '200') {
                            $scope.getMembersForApproval();
                        }
                    });
                }

            }])

    .controller('ModalController',
        ['$scope', '$rootScope', '$uibModal', 'AdminCommonService',
            function ($scope, $rootScope, $uibModal, AdminCommonService) {

        $scope.openUpdateProducerModal = function(selectedProducer){

            AdminCommonService.setSelectedProducer(selectedProducer);

            $scope.animationsEnabled = true;
            var newModalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'modules/admin/views/producerupdate.html',
                controller: 'ModalInstanceController',
                size: 'lg',
                resolve: {
                }
            });
        }
    }])

    .controller('ModalInstanceController', ['$scope', '$rootScope', '$uibModalInstance', 'AdminCommonService', 'AdminService', function ($scope, $rootScope, $uibModalInstance, AdminCommonService, AdminService) {

        $scope.updatedProducer = {};

        $scope.init = function (){
            $scope.updatedProducer = AdminCommonService.getSelectedProducer();
        }

        $scope.init();

        $scope.updateProducer = function (){
            AdminService.producerUpdate($scope.updatedProducer, function(response){
                if(response.status == '200') {
                    AdminCommonService.setSelectedProducer($scope.updatedProducer);
                    $scope.ok();
                }
            });
        }

        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);