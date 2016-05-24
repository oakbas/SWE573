/**
 * Created by ozlemakbas on 29/04/16.
 */

angular.module('Registration')

    .factory('RegistrationService',
        ['$http', '$cookieStore', '$rootScope',
            function ($http, $cookieStore, $rootScope) {
                var service = {};

                service.submit = function (memberObject, callback) {

                    var postUrl = $rootScope.serverURL + "addMember"
                    var req = {
                        method: 'POST',
                        url: postUrl,
                        headers: { 'Content-Type': 'application/json'
                        },
                        data: memberObject
                    }

                    $http(req).then(function(response) {
                            callback(response)
                            return response.data;
                    });
                };
                return service;
            }])

