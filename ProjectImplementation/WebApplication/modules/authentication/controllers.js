/**
 * Created by ozlemakbas on 29/04/16.
 */

'use strict';

angular.module('Authentication')

    .controller('LoginController',
        ['$scope', '$rootScope', '$location', 'AuthenticationService',
            function ($scope, $rootScope, $location, AuthenticationService) {

                // reset login status
                AuthenticationService.ClearCredentials();

                $scope.login = function () {
                    $scope.dataLoading = true;

                    AuthenticationService.Login($scope.username, $scope.password, function (response) {
                        if (response.status == '200') {
                            AuthenticationService.SetCredentials($scope.username, $scope.password);
                            $location.path('/products');
                        } else {
                            $scope.error = response.message;
                            $scope.dataLoading = false;
                        }
                    });
                };
            }]);