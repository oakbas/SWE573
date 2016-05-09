/**
 * Created by ozlemakbas on 06/05/16.
 */

angular.module('Producers')

    .factory('ProducersService',
        ['$http', '$cookieStore', '$rootScope',
            function ($http, $cookieStore, $rootScope) {
                var service = {};

                service.getAllProducers = function (callback) {

                    $http.get($rootScope.serverURL + "producers", {headers: { 'Content-Type': 'application/json'
                        }})
                        .then(function(response) {
                            callback(response);
                            return response.data;
                        });
                };

                service.getProducer = function (producerId, callback) {

                    $http.get($rootScope.serverURL + "producers/" + producerId, {headers: { 'Content-Type': 'application/json'
                        }})
                        .then(function(response) {
                            callback(response);
                            return response.data;
                        });
                };

                return service;
            }])

    .factory('ProducerCommonService',
        ['$rootScope',
            function ($rootScope) {
                var service = {};

                var selectedProducer = {};

                service.setSelectedProducer = function (selected) {
                    selectedProducer = selected;
                }

                service.getSelectedProducer = function () {
                    return selectedProducer;
                }

                return service;
            }])