/**
 * Created by ozlemakbas on 03/05/16.
 */

'use strict';

angular.module('Volunteer')

    .controller('VolunteerController',
        ['$scope', '$rootScope', '$location', 'VolunteerService', 'AuthenticationService',
            function ($scope, $rootScope, $location, VolunteerService, AuthenticationService) {

                $scope.data = {
                    newsList: [],
                    currentDate: null,
                    selectedWork: null,
                    availableWorks: [],
                    volunteerworkList: [],
                }
                
                $scope.init = function () {
                    VolunteerService.getAllNews(function(response){
                        if(response.status == '200'){
                            $scope.data.newsList = response.data;
                        }
                    });

                    VolunteerService.getAllVolunteerworks(function(response){
                        if(response.status == '200'){
                            $scope.data.volunteerworkList = response.data;
                        }
                    });

                    VolunteerService.getAllWorkTypes(function(response){
                        if(response.status == '200'){
                            $scope.data.availableWorks = response.data;
                        }
                    });

                    $scope.data.currentDate = new Date();

                }

                $scope.init();

                $scope.getAllNews = function(){
                    VolunteerService.getAllNews(function(response){
                        if(response.status == '200'){
                            $scope.data.newsList = response.data;
                        }
                    });
                }

                $scope.getAllVolunteerworks = function(){
                    VolunteerService.getAllVolunteerworks(function(response){
                        if(response.status == '200'){
                            $scope.data.volunteerworkList = response.data;
                        }
                    });
                }

                $scope.addNews = function(){
                    var newsBodyContent = $scope.newsBody;
                    var newsData =  {
                        newsBody: newsBodyContent,
                        dueDate: $scope.dueDate,
                    }
                    VolunteerService.addNews(newsData, function (response) {
                        if(response.status == '200') {
                            $scope.getAllNews();
                        }
                    });
                }

                $scope.addVolunteerWork = function(){
                    var workData =  {
                        workDate: $scope.workDate,
                        worktype: {id: $scope.data.selectedWork},
                        member: {id: $rootScope.globals.currentUser.memberId}
                    }
                    VolunteerService.addVolunteerWork(workData, function (response) {
                        if(response.status == '200') {
                            $scope.getAllVolunteerworks();
                        }
                    });
                }

                $scope.openSellPage = function(){
                    $location.path('/sell');
                }

                $scope.openStockPage = function(){
                    $location.path('/stock');
                }

                $scope.logout = function(){
                    AuthenticationService.ClearCredentials();
                }

            }]);