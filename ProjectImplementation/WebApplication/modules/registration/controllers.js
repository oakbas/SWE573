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
                    RegistrationService.submit(function (response) {
                        if(response.data.status == true) {
                            Console.log("basarili");
                        }
                    });
                }
            }]);