/**
 * Created by ozlemakbas on 29/04/16.
 */

angular.module('Registration')

    .factory('RegistrationService',
        ['$http', '$cookieStore', '$rootScope',
            function ($http, $cookieStore, $rootScope) {
                var service = {};

                service.submit = function (callback) {

                    $http.get(($rootScope.serverURL + "members"))
                        .then(function(response) {
                            callback(response)
                            return response.data;
                        });
                };
                return service;
            }])

