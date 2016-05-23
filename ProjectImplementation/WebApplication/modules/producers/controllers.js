/**
 * Created by ozlemakbas on 06/05/16.
 */

'use strict';

angular.module('Producers', ['ngMap'])

    .controller('ProducersController',
        ['$scope', '$location', 'ProducersService', 'ProducerCommonService', 'AuthenticationService',
            function ($scope, $location, ProducersService, ProducerCommonService, AuthenticationService) {

                $scope.data = {
                    producerList: null,
                }

                $scope.init = function () {
                    ProducersService.getAllProducers(function(response){
                        if(response.status == '200'){
                            $scope.data.producerList = response.data;
                        }
                    });
                }

                $scope.init();

                $scope.getAllProducers = function() {
                    ProducersService.getAllProducers(function(response){
                        if(response.status == '200'){
                            $scope.data.producerList = response.data;
                        }
                    });
                }

                $scope.setProducerDesc = function(producer) {
                    ProducerCommonService.setSelectedProducer(producer);
                    $location.path('/producer');
                }

                $scope.logout = function(){
                    AuthenticationService.ClearCredentials();
                }

            }])

        .controller('ProducerDescController',
            ['$scope', '$rootScope', '$location', 'ProducersService', 'ProducerCommonService',
                function ($scope, $rootScope, $location, ProducersService, ProducerCommonService) {

                    $scope.data = {
                        producerInfo: null,
                        imagePlace: null,
                        productList: [],
                    }

                    $scope.init = function() {
                        $scope.data.producerInfo = ProducerCommonService.getSelectedProducer();
                        ProducersService.getProducerProducts($scope.data.producerInfo.id,function(response){
                            if(response.status == '200'){
                                $scope.data.productList = response.data;
                            }
                        });
                    }

                    $scope.init();

                }]);