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
                                    birthdate:'1990-06-06',
                                    bio: $scope.bio,
                                    password: $scope.bio
                                  }
                    RegistrationService.submit(function (response, memberData) {
                        if(response.status == '200') {
                            console.log("successful");
                        }
                        else{
                            console.log("something is wrong");
                        }
                    });
                }
            }]);