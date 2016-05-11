/**
 * Created by ozlemakbas on 11/05/16.
 */

angular.module('Sell')

    .factory('SellService',
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

                service.getMember = function (memberId, callback) {

                    $http.get($rootScope.serverURL + "members/" + memberId, {headers: { 'Content-Type': 'application/json'
                        }})
                        .then(function(response) {
                            callback(response);
                            return response.data;
                        });
                };

                service.getAllProducers = function (callback) {

                    $http.get($rootScope.serverURL + "producers", {headers: { 'Content-Type': 'application/json'
                        }})
                        .then(function(response) {
                            callback(response);
                            return response.data;
                        });
                };

                return service;
            }])
