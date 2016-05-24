/**
 * Created by ozlemakbas on 12/05/16.
 */

'use strict';

angular.module('Admin', ['ui.bootstrap', 'ngFileUpload'])

    .controller('AdminController',
        ['$scope', '$rootScope', 'AdminService', 'AuthenticationService',
            function ($scope, $rootScope, AdminService, AuthenticationService) {
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

                $rootScope.$on("CallProducers", function(){
                    $scope.getAllProducers();
                });

                $scope.logout = function(){
                    AuthenticationService.ClearCredentials();
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

        $scope.openNewProducerModal = function(){

            $scope.animationsEnabled = true;
            var newModalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'modules/admin/views/produceradd.html',
                controller: 'ModalInstanceController',
                size: 'lg',
                resolve: {
                }
            });
        }

    }])

    .controller('ModalInstanceController', ['$scope', '$rootScope', '$uibModalInstance', 'AdminCommonService', 'AdminService', 'Upload',
        function ($scope, $rootScope, $uibModalInstance, AdminCommonService, AdminService, Upload) {

        $scope.updatedProducer = {};
        $scope.newProducer = {};

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
        
        $scope.addProducer = function () {
            $scope.newProducer = {  producerName: $scope.producerName,
                                    producerDesc: $scope.producerDesc,
                                    producerCity: $scope.producerCity,
                                    producerAddress: $scope.producerAddress,
                                    producerPhone: $scope.producerPhone,
                                    producerLatitude: $scope.producerLatitude,
                                    producerLongitude: $scope.producerLongitude

            }
            AdminService.producerAdd($scope.newProducer, function(response){
                if(response.status == '200') {
                    $scope.cancel();
                }
            });
        }

        $scope.submit = function() {
            if ($scope.form.file.$valid && $scope.file) {
                $scope.upload($scope.file);
                $rootScope.$emit("CallProducers", {});
                $scope.ok();
            }
        };

        // upload on file select or drop
        $scope.upload = function (file) {

            var dataUrl;
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = function (e) {
                dataUrl = e.target.result;
            };
            Upload.dataUrl(file, true).then(function(url){
                var producerData =  {
                    photoURL: dataUrl,
                    producerName: $scope.producerName,
                    producerDesc: $scope.producerDesc,
                    producerCity: $scope.producerCity,
                    producerAddress: $scope.producerAddress,
                    producerPhone: $scope.producerPhone,
                    producerLatitude: $scope.producerLatitude,
                    producerLongitude: $scope.producerLongitude
                }
                AdminService.producerAdd(producerData, function (response) {
                    if(response.status == '200') {
                        console.log("successful");
                    }
                    else{
                        console.log("something is wrong");
                    }
                });
            });
        };

        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);