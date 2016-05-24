/**
 * Created by ozlemakbas on 09/05/16.
 */

'use strict';

angular.module('Stock', ['ui.bootstrap', 'ngFileUpload'])

    .controller('StockController',
        ['$scope', '$rootScope', 'StockService', 'ProductService', 'Upload',
            function ($scope, $rootScope, StockService, ProductService, Upload) {
                $scope.data = { unitTypes: [],
                                selectedUnitType: null,
                                packagingTypes: [],
                                selectedPackagingType: null,
                                productList: [],
                                producerList: [],
                                selectedProducer: null,
                                selectedRadio: null,
                                categories: [],
                                selectedCategory:null,
                }

                $scope.init = function() {
                    StockService.getAllUnitTypes(function(response){
                        if(response.status == '200'){
                            $scope.data.unitTypes = response.data;
                        }
                    });

                    StockService.getAllCategories(function(response){
                        if(response.status == '200'){
                            $scope.data.categories = response.data;
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

                $scope.submit = function() {
                    if ($scope.form.file.$valid && $scope.file) {
                        $scope.upload($scope.file);
                    }
                };

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
                        productcategory: {id: $scope.data.selectedCategory},
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


                // upload on file select or drop
                $scope.upload = function (file) {
                    $scope.dataLoading = true;
                    var dataUrl;
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.onload = function (e) {
                        dataUrl = e.target.result;
                    };
                    Upload.dataUrl(file, true).then(function (url) {
                        var productData = {
                            photoURL: dataUrl,
                            productName: $scope.productName,
                            producer: {id: $scope.data.selectedProducer},
                            productFrom: $scope.productComeFrom,
                            packagingType: {id: $scope.data.selectedPackagingType},
                            unit: $scope.amount,
                            unitType: {id: $scope.data.selectedUnitType},
                            price: $scope.unitPrice,
                            unitAmount: $scope.stockAmount,
                            productcategory: {id: $scope.data.selectedCategory}
                        }
                        StockService.saveProduct(productData, function (response) {
                            if(response.status == '200') {
                                $scope.dataLoading = false;
                                window.alert("Urun Eklendi");
                            }
                            else{
                                console.log("something is wrong");
                                $scope.dataLoading = false;
                            }
                        });
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

            }]);