/**
 * Created by ozlemakbas on 03/05/16.
 */

'use strict';

angular.module('Volunteer')

    .controller('VolunteerController',
        ['$scope', '$location',
            function ($scope, $location) {

                $scope.openSellPage = function(){
                    //$location.path('/');
                }

                $scope.openStockPage = function(){
                    $location.path('/stock');
                }

            }]);