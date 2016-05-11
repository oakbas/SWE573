/**
 * Created by ozlemakbas on 11/05/16.
 */

/**
 * Created by ozlemakbas on 03/05/16.
 */

'use strict';

angular.module('Sell')

    .controller('SellController',
        ['$scope', '$rootScope', 'SellService',
            function ($scope, $rootScope, SellService) {

                $scope.data = { productList: [],
                                selectedRadio: null,
                                soldProductList: [],
                                sumAmount: 0,
                                discount: 0.10,
                                verified: false,
                                producerList: [],
                }

                $scope.init = function() {

                    SellService.getAllProducts(function(response){
                        if(response.status == '200'){
                            $scope.data.productList = response.data;
                        }
                    });

                    SellService.getAllProducers(function(response){
                        if(response.status == '200'){
                            $scope.data.producerList = response.data;
                        }
                    });
                }

                $scope.init();

                $scope.addToList = function (amount) {
                    if (!$scope.data.selectedRadio){
                        //Todo: error msg adding
                        console.log('bir sey secmelisin');
                    }
                    else if (amount > $scope.data.selectedRadio.unitAmount){
                        //Todo: error msg adding
                        console.log('secilen miktar stoktan fazla');
                    }
                    else{
                        var soldPrice = amount * $scope.data.selectedRadio.price;
                        var soldProduct = {product: $scope.data.selectedRadio, soldPrice: soldPrice}
                        $scope.data.soldProductList.push(soldProduct);
                        $scope.data.sumAmount += soldPrice;
                    }
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

                $scope.verifyMember = function (memberId) {
                    SellService.getMember(memberId, function(response){
                        if(response.status == '200'){
                            if (response.data != "") {
                                $scope.data.sumAmount -= ($scope.data.sumAmount * $scope.data.discount);
                                $scope.data.verified = true;
                            }
                            else {
                                console.log('dogrulanamadi');

                            }
                        }
                    });
                }
            }]);