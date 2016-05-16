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
                    categories: null,
                    catSelect: null,
                }

                $scope.init = function () {
                    ProductService.getAllProducts(function(response){
                        if(response.status == '200'){
                            $scope.data.productList = response.data;
                        }
                    });

                    ProductService.getAllCategories(function(response){
                        if(response.status == '200'){
                            $scope.data.categories = response.data;
                        }
                    });
                }

                $scope.init();

                $scope.setProductDesc = function(product) {
                    ProductCommonService.setSelectedProduct(product);
                    $location.path('/product');
                }

                $scope.filterCategory = function(category) {
                    if (category == null) {
                        return function (item) {
                            return item;
                        }
                    }
                    else {
                        return function (item) {
                            return item.productcategory.id.toString() === category;
                        };
                    }
                };
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
                
                $scope.getComments = function () {
                    ProductService.getAllComments(function(response){
                        if(response.status == '200'){
                            $scope.data.commentList = response.data;
                        }
                    });
                }

                $scope.addComment = function(){
                    var commentData =  {
                        username: "uretici",
                        body: $scope.commentBody,
                        product: {id: $scope.data.productInfo.id},
                    }

                    ProductService.submitComment(commentData, function (response) {
                        if(response.status == '200') {
                            console.log("successful");
                            $scope.getComments();
                        }
                    });
                }

            }]);