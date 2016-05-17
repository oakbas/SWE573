/**
 * Created by ozlemakbas on 29/04/16.
 */

'use strict';

angular.module('Authentication')

    .controller('LoginController',
        ['$scope', '$rootScope', '$location', 'AuthenticationService',
            function ($scope, $rootScope, $location, AuthenticationService) {


                $scope.init = function () {
                    AuthenticationService.firstLogin("nonmember", "123456", function (response) {
                        if (response.status == '200') {
                            AuthenticationService.SetCredentials("nonmember","123456", response.data.role);
                        } else {
                            $scope.error = response.message;
                            $scope.dataLoading = false;
                        }
                    });
                }

                $scope.init();

                $scope.login = function () {
                    $scope.dataLoading = true;

                    AuthenticationService.Login($scope.username, $scope.password, function (response) {
                        if (response.data != "") {
                            AuthenticationService.SetCredentials($scope.username, $scope.password, response.data.role);
                            $location.path('/products');
                        } else {
                            $scope.error = "Hatali kullanici";
                            $scope.dataLoading = false;
                        }
                    });
                };
            }]);