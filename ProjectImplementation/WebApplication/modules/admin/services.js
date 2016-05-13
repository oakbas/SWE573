/**
 * Created by ozlemakbas on 12/05/16.
 */

angular.module('Admin')

    .factory('AdminService',
        ['$http', '$rootScope',
            function ($http, $rootScope) {
                var service = {};

                service.getMembersForApproval = function (callback) {

                    $http.get($rootScope.serverURL + "membersforapprove", {headers: { 'Content-Type': 'application/json'
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

                service.memberApprove = function (memberObject, callback) {
                    var putUrl = $rootScope.serverURL + "/member/update/" + memberObject.id
                    var req = {
                        method: 'PUT',
                        url: putUrl,
                        headers: { 'Content-Type': 'application/json'
                        },
                        data: memberObject
                    }

                    $http(req).then(function(response) {
                        callback(response)
                        return response.data;
                    });
                };

                service.producerUpdate = function (producerObject, callback) {
                    var putUrl = $rootScope.serverURL + "/producer/update/" + producerObject.id
                    var req = {
                        method: 'PUT',
                        url: putUrl,
                        headers: { 'Content-Type': 'application/json'
                        },
                        data: producerObject
                    }

                    $http(req).then(function(response) {
                        callback(response)
                        return response.data;
                    });
                };

                return service;
            }])

    .factory('AdminCommonService',
        ['$rootScope',
            function ($rootScope) {
                var service = {};

                var selectedProducer = {};

                service.setSelectedProducer = function (sProducer) {
                    selectedProducer = sProducer;
                }

                service.getSelectedProducer = function () {
                    return selectedProducer;
                }

                return service;
            }])