/**
 * Created by ozlemakbas on 29/04/16.
 */

'use strict';

angular.module('Registration')

    .controller('RegistrationController',
        ['$scope', 'RegistrationService',
            function ($scope, RegistrationService) {
                $scope.submit = function () {
                    $scope.dataLoading = true;
                    var memberData =  {
                                    firstname: $scope.firstname,
                                    surname: $scope.surname,
                                    username: $scope.username,
                                    phone: $scope.phone,
                                    email: $scope.emailAddress,
                                    bio: $scope.bio,
                                    password: $scope.bio
                                  }
                    RegistrationService.submit(memberData, function (response) {
                        if(response.status == '200') {
                            console.log("successful");
                            $scope.dataLoading = false;
                        }
                        else{
                            console.log("something is wrong");
                        }
                    });
                }
            }]);