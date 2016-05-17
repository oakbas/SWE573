/**
 * Created by ozlemakbas on 29/04/16.
 */

'use strict';

angular.module('Authentication')

    .controller('LoginController',
        ['$scope', '$rootScope', '$location', 'AuthenticationService',
            function ($scope, $rootScope, $location, AuthenticationService) {

                $scope.login = function () {
                    $scope.dataLoading = true;

                    AuthenticationService.Login($scope.username, $scope.password, function (response) {
                        if (response.data != "") {
                            if (response.data.password == $scope.password) {
                                AuthenticationService.SetCredentials($scope.username, $scope.password, response.data.role);
                                $location.path('/products');
                            }
                        }
                        else {
                            $scope.error = "Hatali kullanici";
                            $scope.dataLoading = false;
                        }

                    });
                };
            }]);