/**
 * Created by ozlemakbas on 09/05/16.
 */

angular.module('Stock')

    .factory('StockService',
        ['$http', '$rootScope',
            function ($http, $rootScope) {
                var service = {};

                service.getAllUnitTypes = function (callback) {

                    $http.get($rootScope.serverURL + "unittypes", {headers: { 'Content-Type': 'application/json'
                        }})
                        .then(function(response) {
                            callback(response);
                            return response.data;
                        });
                };

                service.getAllPackagingTypes = function (callback) {

                    $http.get($rootScope.serverURL + "packagingtypes", {headers: { 'Content-Type': 'application/json'
                        }})
                        .then(function(response) {
                            callback(response);
                            return response.data;
                        });
                };

                service.getAllProducts = function (callback) {

                    $http.get($rootScope.serverURL + "products", {headers: { 'Content-Type': 'application/json'
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

                service.saveProduct = function (productObject, callback) {

                    var postUrl = $rootScope.serverURL + "addproduct"
                    var req = {
                        method: 'POST',
                        url: postUrl,
                        headers: { 'Content-Type': 'application/json'
                        },
                        data: productObject
                    }

                    $http(req).then(function(response) {
                        callback(response)
                        return response.data;
                    });
                };

                return service;
            }])
