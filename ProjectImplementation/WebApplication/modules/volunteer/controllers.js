/**
 * Created by ozlemakbas on 03/05/16.
 */

'use strict';

angular.module('Volunteer')

    .controller('VolunteerController',
        ['$scope', '$location', 'VolunteerService',
            function ($scope, $location, VolunteerService) {

                $scope.data = {
                    newsList: [],
                    currentDate: null,
                }
                
                $scope.init = function () {
                    VolunteerService.getAllNews(function(response){
                        if(response.status == '200'){
                            $scope.data.newsList = response.data;
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

                $scope.openSellPage = function(){
                    $location.path('/sell');
                }

                $scope.openStockPage = function(){
                    $location.path('/stock');
                }

            }]);