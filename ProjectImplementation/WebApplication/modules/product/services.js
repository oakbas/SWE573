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

                service.getAllComments = function (callback) {

                    $http.get($rootScope.serverURL + "comments", {headers: { 'Content-Type': 'application/json'
                        }})
                        .then(function(response) {
                            callback(response);
                            return response.data;
                        });
                };

                service.submitComment = function (commentObject, callback) {

                    var postUrl = $rootScope.serverURL + "addComment"
                    var req = {
                        method: 'POST',
                        url: postUrl,
                        headers: { 'Content-Type': 'application/json'
                        },
                        data: commentObject
                    }

                    $http(req).then(function(response) {
                        callback(response)
                        return response.data;
                    });
                };

                return service;
            }])


    .factory('ProductCommonService',
        ['$rootScope',
            function ($rootScope) {
                var service = {};

                var selectedProduct = {};

                service.setSelectedProduct = function (selected) {
                    selectedProduct = selected;
                }

                service.getSelectedProduct = function () {
                    return selectedProduct;
                }

                return service;
            }])
