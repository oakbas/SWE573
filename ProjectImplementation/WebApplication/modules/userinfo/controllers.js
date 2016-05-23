/**
 * Created by ozlemakbas on 15/05/16.
 */

'use strict';

angular.module('Userinfo', ['googlechart'])

    .controller('UserinfoController',
        ['$scope', 'UserinfoService', 'AuthenticationService',
            function ($scope, UserinfoService, AuthenticationService) {

                $scope.data = {
                    memberInfo: null,
                    boughtProductList: null,
                    producerRows: [],
                    categoryRows: [],
                }

                $scope.producerChartObject = {};
                $scope.categoryChartObject = {};
                
                $scope.init = function () {
                    UserinfoService.getMember(1,function(response){
                        if(response.status == '200'){
                            $scope.data.memberInfo = response.data;
                            $scope.data.boughtProductList = response.data.soldProductList;
                            $scope.arrangeData($scope.data.boughtProductList);
                            $scope.getStatistics();
                        }
                    });
                }

                $scope.init();

                $scope.getMemberInfo = function(){
                    UserinfoService.getMember(function(response){
                        if(response.status == '200'){
                            $scope.data.memberInfo = response.data;
                        }
                    });
                }

                $scope.arrangeData = function(data){

                    //Arrange according to the producers
                    var producerList = [];
                    for (var i = 0; i< data.length; i++){
                        if(producerList.indexOf(data[i].product.producer.id) == -1){
                            producerList.push(data[i].product.producer.id);
                            $scope.data.producerRows.push( {c: [{v: data[i].product.producer.producerName},
                                     {v: data[i].soldAmount}] });
                        }
                        else{
                            var index = producerList.indexOf(data[i].product.producer.id)
                            $scope.data.producerRows[index].c[1].v += data[i].soldAmount;
                        }
                    }

                    //Arrange according to product category
                    var categoryList = [];
                    for (var i = 0; i< data.length; i++){
                        if(categoryList.indexOf(data[i].product.productcategory.id) == -1){
                            categoryList.push(data[i].product.productcategory.id);
                            $scope.data.categoryRows.push( {c: [{v: data[i].product.productcategory.categoryName},
                                {v: data[i].soldAmount}] });
                        }
                        else{
                            var index = categoryList.indexOf(data[i].product.productcategory.id)
                            $scope.data.categoryRows[index].c[1].v += data[i].soldAmount;
                        }
                    }
                }

                $scope.getStatistics = function(){

                    $scope.producerChartObject.type = "PieChart";

                    $scope.producerChartObject.data = {"cols": [
                        {id: "t", label: "Uretici Ismi", type: "string"},
                        {id: "s", label: "Alim Miktari", type: "number"}
                    ], "rows": $scope.data.producerRows};

                    $scope.producerChartObject.options = {
                        'title': 'Ureticiye Gore Alim Dagilimi'
                    };

                    $scope.categoryChartObject.type = "PieChart";
                    $scope.categoryChartObject.data = {"cols": [
                        {id: "t", label: "Uretici Ismi", type: "string"},
                        {id: "s", label: "Alim Miktari", type: "number"}
                    ], "rows": $scope.data.categoryRows};

                    $scope.categoryChartObject.options = {
                        'title': 'Urun Kategorisine Gore Alim Dagilimi'
                    };
                }

                $scope.logout = function(){
                    AuthenticationService.ClearCredentials();
                }
            }]);