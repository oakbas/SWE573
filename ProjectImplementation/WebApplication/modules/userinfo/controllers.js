/**
 * Created by ozlemakbas on 15/05/16.
 */

'use strict';

angular.module('Userinfo', ['googlechart'])

    .controller('UserinfoController',
        ['$scope', 'UserinfoService',
            function ($scope, UserinfoService) {

                $scope.data = {
                    memberInfo: null,
                    boughtProductList: null,
                    rows: [],
                }
                
                $scope.init = function () {
                    UserinfoService.getMember(1,function(response){
                        if(response.status == '200'){
                            $scope.data.memberInfo = response.data;
                            $scope.data.boughtProductList = response.data.soldProductList;
                            $scope.arrangeData($scope.data.boughtProductList);
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
                    var producerList = [];
                    for (var i = 0; i< data.length; i++){
                        if(producerList.indexOf(data[i].product.producer.id) == -1){
                            producerList.push(data[i].product.producer.id);
                            $scope.data.rows.push( {c: [{v: data[i].product.producer.producerName},
                                     {v: data[i].soldAmount}] });
                        }
                        else{
                            var index = producerList.indexOf(data[i].product.producer.id)
                            $scope.data.rows[index].c[1].v += data[i].soldAmount;
                        }
                    }
                }

                $scope.myChartObject = {};

                $scope.myChartObject.type = "PieChart";

                $scope.myChartObject.data = {"cols": [
                    {id: "t", label: "Uretici Ismi", type: "string"},
                    {id: "s", label: "Alim Miktari", type: "number"}
                ], "rows": $scope.data.rows};

                $scope.myChartObject.options = {
                    'title': 'Ureticiye Gore Alim Dagilimi'
                };

            }]);