/**
 * Created by ozlemakbas on 29/04/16.
 */

'use strict';

// module declaration
angular.module('Authentication', []);
angular.module('Home', []);
angular.module('Registration', []);
angular.module('Product', []);
angular.module('Producers', []);
angular.module('Stock', []);
angular.module('Sell', []);
angular.module('Volunteer', []);
angular.module('Admin', []);
angular.module('Userinfo', []);

angular.module('BasicHttpAuth', [
        'Authentication',
        'Home',
        'Registration',
        'Product',
        'Producers',
        'Stock',
        'Sell',
        'Volunteer',
        'Admin',
        'Userinfo',
        'ngRoute',
        'ngCookies'
    ])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'modules/authentication/views/login.html'
            })

            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'modules/home/views/home.html'
            })

            .when('/registration', {
                controller: 'RegistrationController',
                templateUrl: 'modules/registration/views/registration.html'
            })

            .when('/products', {
                controller: 'ProductController',
                templateUrl: 'modules/product/views/products.html'
            })

            .when('/product', {
                controller: 'ProductDescController',
                templateUrl: 'modules/product/views/product.html'
            })

            .when('/producer', {
                controller: 'ProducerDescController',
                templateUrl: 'modules/producers/views/producer.html'
            })

            .when('/producers', {
                controller: 'ProducersController',
                templateUrl: 'modules/producers/views/producers.html'
            })

            .when('/stock', {
                controller: 'StockController',
                templateUrl: 'modules/stock/views/stock.html'
            })

            .when('/sell', {
                controller: 'SellController',
                templateUrl: 'modules/sell/views/sell.html'
            })

            .when('/volunteer', {
                controller: 'VolunteerController',
                templateUrl: 'modules/volunteer/views/volunteer.html'
            })

            .when('/admin', {
                controller: 'AdminController',
                templateUrl: 'modules/admin/views/admin.html'
            })

            .when('/userinfo', {
                controller: 'UserinfoController',
                templateUrl: 'modules/userinfo/views/userinfo.html'
            })

            .otherwise({ redirectTo: '/login' });
    }])

    .run(['$rootScope', '$location', '$cookieStore', '$http',
        function ($rootScope, $location, $cookieStore, $http) {


            // Local IP
            $rootScope.serverURL = "http://127.0.0.1:8080/";


            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};

            $rootScope.$on('$locationChangeStart', function (event, next, current) {

                // redirect to login page if not logged in or page is not public
                if (!$rootScope.globals.currentUser) {
                    if ($location.path() == '/registration') {
                        $location.path('/registration');
                    }
                    else if ($location.path() == '/products') {
                        $location.path('/products');
                    }

                    else if ($location.path() == '/producers'){
                        $location.path('/producers');
                    }

                    else if ($location.path() == '/product'){
                        $location.path('/product');
                    }

                    else if ($location.path() == '/producer'){
                        $location.path('/producer');
                    }

                    else if ($location.path() == '/userinfo'){
                        window.alert('Uye degilsiniz');
                        $location.path('/products');
                    }

                    else if ($location.path() == '/volunteer'){
                        window.alert('Uye degilsiniz');
                        $location.path('/products');
                    }
                }

                else {
                    if ($rootScope.globals.currentUser.role.roleName !== "admin"){
                        if($location.path() == '/admin'){
                            window.alert('Admin degilsiniz');
                            $location.path('/products');
                        }
                    }
                }

            });
        }]);
