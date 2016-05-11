/**
 * Created by ozlemakbas on 09/05/16.
 */

angular.module('Product')

    .factory('ProductService',
        ['$http', '$rootScope',
            function ($http, $rootScope) {
                var service = {};

                service.getAllProducts = function (callback) {

                    $http.get($rootScope.serverURL + "products", {headers: { 'Content-Type': 'application/json'
                        }})
                        .then(function(response) {
                            callback(response);
                            return response.data;
                        });
                };

                return service;
            }])
