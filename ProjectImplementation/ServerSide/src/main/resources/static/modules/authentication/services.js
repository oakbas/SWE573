/**
 * Created by ozlemakbas on 29/04/16.
 */

'use strict';

angular.module('Authentication')

    .factory('AuthenticationService',
        ['$http', '$cookieStore', '$rootScope',
            function ($http, $cookieStore, $rootScope) {
                var service = {};

                service.Login = function (username, password, callback) {

                    $http.get($rootScope.serverURL + "members/findbyusername/" + username, {headers: { 'Content-Type': 'application/json'
                        }})
                        .then(function(response) {
                            callback(response);
                            return response.data;
                        });
                };

                service.SetCredentials = function (username, memberId, role) {

                    $rootScope.globals = {
                        currentUser: {
                            username: username,
                            role: role,
                            memberId: memberId,
                        }
                    };

                    $cookieStore.put('globals', $rootScope.globals);
                };

                service.ClearCredentials = function () {
                    $rootScope.globals = {};
                    $cookieStore.remove('globals');
                };

                return service;
            }])