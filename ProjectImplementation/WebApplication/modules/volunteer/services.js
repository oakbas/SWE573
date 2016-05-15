/**
 * Created by ozlemakbas on 03/05/16.
 */

angular.module('Volunteer')

    .factory('VolunteerService',
        ['$http', '$rootScope',
            function ($http, $rootScope) {
                var service = {};

                service.getAllNews = function (callback) {

                    $http.get($rootScope.serverURL + "news", {headers: { 'Content-Type': 'application/json'
                        }})
                        .then(function(response) {
                            callback(response);
                            return response.data;
                        });
                };

                service.getAllWorkTypes = function (callback) {

                    $http.get($rootScope.serverURL + "worktypes", {headers: { 'Content-Type': 'application/json'
                        }})
                        .then(function(response) {
                            callback(response);
                            return response.data;
                        });
                };

                service.addNews = function (newsObject, callback) {

                    var postUrl = $rootScope.serverURL + "addnews"
                    var req = {
                        method: 'POST',
                        url: postUrl,
                        headers: { 'Content-Type': 'application/json'
                        },
                        data: newsObject
                    }

                    $http(req).then(function(response) {
                        callback(response)
                        return response.data;
                    });
                };

                service.addVolunteerWork = function (workObject, callback) {

                    var postUrl = $rootScope.serverURL + "addvolunteerwork"
                    var req = {
                        method: 'POST',
                        url: postUrl,
                        headers: { 'Content-Type': 'application/json'
                        },
                        data: workObject
                    }

                    $http(req).then(function(response) {
                        callback(response)
                        return response.data;
                    });
                };

                return service;
            }])
