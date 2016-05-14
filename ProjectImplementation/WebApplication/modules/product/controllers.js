/**
 * Created by ozlemakbas on 03/05/16.
 */

'use strict';

angular.module('Product')

    .controller('ProductController',
        ['$scope', '$location', 'ProductService', 'ProductCommonService',
            function ($scope, $location, ProductService, ProductCommonService) {

                $scope.data = {
                    productList: null,
                }

                $scope.init = function () {
                    ProductService.getAllProducts(function(response){
                        if(response.status == '200'){
                            $scope.data.productList = response.data;
                        }
                    });
                }

                $scope.init();

                $scope.setProductDesc = function(product) {
                    ProductCommonService.setSelectedProduct(product);
                    $location.path('/product');
                }

            }])

    .controller('ProductDescController',
        ['$scope', '$location', 'ProductService', 'ProductCommonService',
            function ($scope, $location, ProductService, ProductCommonService) {

                $scope.data = {
                    productInfo: null,
                }

                $scope.init = function() {
                    $scope.data.productInfo = ProductCommonService.getSelectedProduct();
                }

                $scope.init();

                $scope.productsPage = function(){
                    $location.path('/products');
                }

            }]);