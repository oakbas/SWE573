/**
 * Created by ozlemakbas on 09/05/16.
 */

'use strict';

angular.module('Stock')

    .controller('StockController',
        ['$scope', '$rootScope', 'StockService',
            function ($scope, $rootScope, StockService, ProductService) {
                $scope.data = { unitTypes: [],
                                selectedUnitType: null,
                                packagingTypes: [],
                                selectedPackagingType: null,
                                productList: [],
                                producerList: [],
                                selectedProducer: null,
                                selectedRadio: null,
                }

                $scope.init = function() {
                    StockService.getAllUnitTypes(function(response){
                        if(response.status == '200'){
                            $scope.data.unitTypes = response.data;
                        }
                    });

                    StockService.getAllPackagingTypes(function(response){
                        if(response.status == '200'){
                            $scope.data.packagingTypes = response.data;
                        }
                    });

                    StockService.getAllProducts(function(response){
                        if(response.status == '200'){
                            $scope.data.productList = response.data;
                        }
                    });

                    StockService.getAllProducers(function(response){
                        if(response.status == '200'){
                            $scope.data.producerList = response.data;
                        }
                    });
                }

                $scope.init();

                $scope.updateProductList = function() {
                    StockService.getAllProducts(function(response){
                        if(response.status == '200'){
                            $scope.data.productList = response.data;
                        }
                    });
                }

                $scope.saveProduct = function(){
                    $scope.dataLoading = true;
                    var productData =  {
                        productName: $scope.productName,
                        producer: {id: $scope.data.selectedProducer},
                        productFrom: $scope.productComeFrom,
                        packagingType: {id: $scope.data.selectedPackagingType},
                        unit: $scope.amount,
                        unitType: {id: $scope.data.selectedUnitType},
                        price: $scope.unitPrice,
                        unitAmount: $scope.stockAmount,
                    }
                    StockService.saveProduct(productData, function (response) {
                        if(response.status == '200') {
                            console.log("successful");
                            $scope.dataLoading = false;
                            $scope.updateProductList();

                        }
                        else{
                            console.log("something is wrong");
                            $scope.dataLoading = false;
                        }
                    });
                }

                /* data.selectedRadio is changed under the new scope, to bind to the parent scope's we should use
                 * event publish/subscribe pattern
                 * * * @param  {selected product information}
                 */
                $scope.radioProductSelected = function(data) {
                    $rootScope.$emit('productSelected', data);
                };

                /* data.selectedRadio is changed under the new scope, to bind to the parent scope's we should use
                 * event publish/subscribe pattern
                 * * @param  {click event, selected product information}
                 */
                $rootScope.$on('productSelected', function(evt, data) {
                    $scope.data.selectedRadio = data;

                });

                $scope.deleteSelected = function(){
                    //Todo: Add Delete Flag Attribute From Server Side, and set flag true
                    //Show selected product
                    console.log($scope.data.selectedRadio.id);
                }

            }]);