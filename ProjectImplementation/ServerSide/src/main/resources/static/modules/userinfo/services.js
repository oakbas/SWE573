/**
 * Created by ozlemakbas on 15/05/16.
 */

angular.module('Userinfo')

    .factory('UserinfoService',
        ['$http', '$rootScope',
            function ($http, $rootScope) {
                var service = {};

                service.getMember = function (memberId, callback) {

                    $http.get($rootScope.serverURL + "members/" + memberId, {headers: { 'Content-Type': 'application/json'
                        }})
                        .then(function(response) {
                            callback(response);
                            return response.data;
                        });
                };

                return service
            }])