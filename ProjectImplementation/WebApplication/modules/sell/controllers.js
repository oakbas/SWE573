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
                                sellValidation:false,
                                verifiedMember: null,
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
                        $scope.data.errorMsg = "Bir sey secmelisin";
                        $scope.data.sellValidation = true;

                    }
                    else if (amount > $scope.data.selectedRadio.unitAmount){
                        $scope.data.errorMsg = "Stok miktarini kontrol et";
                        $scope.data.sellValidation = true;

                    }
                    else if (amount < 0){
                        $scope.data.errorMsg = "Stok miktarini kontrol et";
                        $scope.data.sellValidation = true;
                    }
                    else{
                        var soldPrice = amount * $scope.data.selectedRadio.price;
                        var soldProduct = {product: $scope.data.selectedRadio, soldPrice: soldPrice, soldAmount: amount}
                        $scope.data.soldProductList.push(soldProduct);
                        $scope.data.sumAmount += soldPrice;
                    }

                    $scope.data.selectedRadio = null;
                }

                $scope.removeElement = function (){
                    for (var i = 0; i< $scope.data.soldProductList.length; i++){
                        if ($scope.data.selectedRadio.product.id == $scope.data.soldProductList[i].product.id){
                            $scope.data.soldProductList.splice(i);
                        }
                    }
                    $scope.data.selectedRadio = null;
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
                                $scope.data.verifiedMember = memberId;
                                window.alert("Uye dogrulandi, indirim uygulandi");
                            }
                            else {
                                window.alert("Uye dogrulanamadi");
                            }
                        }
                    });
                }

                $scope.completeSession = function (){
                    for (var i = 0; i< $scope.data.soldProductList.length; i++){
                        if($scope.data.verified){
                            var soldData = {product: $scope.data.soldProductList[i].product,
                                            soldPrice: $scope.data.soldProductList[i].soldPrice,
                                            soldAmount: $scope.data.soldProductList[i].soldAmount,
                                            soldDate: '2016-06-06',
                                            member: {id: $scope.data.verifiedMember}}
                        }
                        else{
                            soldData = {product: $scope.data.soldProductList[i].product,
                                soldPrice: $scope.data.soldProductList[i].soldPrice,
                                soldAmount: $scope.data.soldProductList[i].soldAmount,
                                soldDate: '2016-06-06'}
                        }
                        SellService.addSoldProduct(soldData, function(response){
                            if(response.status == '200') {
                                soldData.product.unitAmount = soldData.product.unitAmount - soldData.soldAmount;
                                $scope.updateStock(soldData.product);
                                window.alert("Satis tamamlandi eklendi");
                            }
                        });
                    }
                    $scope.data.soldProductList = [];
                    $scope.data.sumAmount = 0;
                }

                $scope.updateStock = function(productData){
                    SellService.updateStock(productData, function(response){
                        if(response.status == '200') {
                        }
                    });
                }
            }]);