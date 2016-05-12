/**
 * Created by ozlemakbas on 12/05/16.
 */

'use strict';

angular.module('Admin')

    .controller('AdminController',
        ['$scope', 'AdminService',
            function ($scope, AdminService) {
                $scope.data = { memberList: [],
                                producerList: [],

                }

                $scope.init = function(){

                    AdminService.getMembersForApproval(function (response) {
                        if(response.status == '200') {
                            console.log("successful");
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

            }]);