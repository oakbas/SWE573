/**
 * Created by ozlemakbas on 03/05/16.
 */

'use strict';

angular.module('Product')

    .controller('ProductController',
        ['$scope', '$location', 'ProductService', 'ProductCommonService', 'AuthenticationService',
            function ($scope, $location, ProductService, ProductCommonService, AuthenticationService) {

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

                $scope.logout = function(){
                    AuthenticationService.ClearCredentials();
                }
            }])

    .controller('ProductDescController',
        ['$scope', '$rootScope', '$location', 'ProductService', 'ProductCommonService', 'AuthenticationService',
            function ($scope, $rootScope , $location, ProductService, ProductCommonService, AuthenticationService) {

                $scope.data = {
                    productInfo: null,
                }

                $scope.init = function() {
                    $scope.data.productInfo = ProductCommonService.getSelectedProduct();
                    ProductService.getProduct($scope.data.productInfo.id, function(response){
                        if(response.status == '200'){
                            $scope.data.productInfo = response.data;
                        }
                    });
                }

                $scope.init();

                $scope.getProductById = function(){
                    ProductService.getProduct($scope.data.productInfo.id, function(response){
                        if(response.status == '200'){
                            $scope.data.productInfo = response.data;
                        }
                    });
                }

                $scope.productsPage = function(){
                    $location.path('/products');
                }
                
                $scope.getComments = function () {
                    ProductService.getAllComments(function(response){
                        if(response.status == '200'){
                            $scope.data.productInfo.commentList = response.data;
                        }
                    });
                }

                $scope.addComment = function(){

                    if (!$rootScope.globals.currentUser){
                        window.alert("Yorum yapabilmek icin uye olmalisiniz");
                    }

                    else{
                        var commentData =  {
                            username: $rootScope.globals.currentUser.username,
                            body: $scope.commentBody,
                            product: {id: $scope.data.productInfo.id},
                        }

                        ProductService.submitComment(commentData, function (response) {
                            if(response.status == '200') {
                                $scope.getProductById();
                            }
                        });
                    }
                }

                $scope.logout = function(){
                    AuthenticationService.ClearCredentials();
                }

            }]);