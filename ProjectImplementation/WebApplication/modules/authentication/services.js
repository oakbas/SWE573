/**
 * Created by ozlemakbas on 29/04/16.
 */

'use strict';

angular.module('Authentication')

    .factory('AuthenticationService',
        ['$http', '$cookieStore', '$rootScope', '$timeout',
            function ($http, $cookieStore, $rootScope, $timeout) {
                var service = {};

                service.Login = function (username, password, callback) {

                    /* Test Authentication */
                    //Todo: Real authentication data will be used.

                    $timeout(function () {
                        var response = { success: username === 'test' && password === 'test' };
                        if (!response.success) {
                            response.message = 'Kullanici adi veya parola yanlis';
                        }
                        callback(response);
                    }, 1000);
                };

                service.SetCredentials = function (username, authdata) {

                    $rootScope.globals = {
                        currentUser: {
                            username: username,
                            authdata: authdata
                        }
                    };

                    $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
                    $cookieStore.put('globals', $rootScope.globals);
                };

                service.ClearCredentials = function () {
                    $rootScope.globals = {};
                    $cookieStore.remove('globals');
                    $http.defaults.headers.common.Authorization = 'Basic ';
                };

                return service;
            }])