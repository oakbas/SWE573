/**
 * Created by ozlemakbas on 06/05/16.
 */

'use strict';

angular.module('Producers', ['ngMap'])

    .controller('ProducersController',
        ['$scope', '$location', 'ProducersService', 'ProducerCommonService',
            function ($scope, $location, ProducersService, ProducerCommonService) {

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

            }])

        .controller('ProducerDescController',
            ['$scope', '$rootScope', '$location', 'ProducersService', 'ProducerCommonService',
                function ($scope, $rootScope, $location, ProducersService, ProducerCommonService) {

                    $scope.data = {
                        producerInfo: null,
                        imagePlace: null,
                    }

                    $scope.init = function() {
                        $scope.data.producerInfo = ProducerCommonService.getSelectedProducer();
                        $scope.data.imagePlace = $rootScope.serverURL + "images/producers/" + $scope.data.producerInfo.photoURL;
                    }

                    $scope.init();

                }]);