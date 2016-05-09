/**
 * Created by ozlemakbas on 06/05/16.
 */

'use strict';

angular.module('Producers', ['ngMap'])

    .controller('ProducersController',
        ['$scope', '$location', 'ProducersService', 'ProducerCommonService',
            function ($scope, $location, ProducersService, ProducerCommonService) {

                $scope.data = {
                    producerLists: null,
                }

                $scope.init = function () {
                    ProducersService.getAllProducers(function(response){
                        if(response.status == '200'){
                            $scope.data.producerLists = response.data;
                        }
                    });
                }

                $scope.init();

                $scope.getAllProducers = function() {
                    ProducersService.getAllProducers(function(response){
                        if(response.status == '200'){
                            $scope.data.producerLists = response.data;
                        }
                    });
                }

                $scope.setProducerDesc = function(producer) {
                    ProducerCommonService.setSelectedProducer(producer);
                    $location.path('/producer');
                }

            }])

        .controller('ProducerDescController',
            ['$scope', '$location', 'ProducersService', 'ProducerCommonService',
                function ($scope, $location, ProducersService, ProducerCommonService) {

                    $scope.data = {
                        producerInfo: null,
                    }

                    $scope.init = function() {
                        $scope.data.producerInfo = ProducerCommonService.getSelectedProducer();
                    }

                    $scope.init();

                }]);