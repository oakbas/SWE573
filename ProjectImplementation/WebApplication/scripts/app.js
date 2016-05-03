/**
 * Created by ozlemakbas on 29/04/16.
 */

'use strict';

// module declaration
angular.module('Authentication', []);
angular.module('Home', []);
angular.module('Registration', []);

angular.module('BasicHttpAuth', [
        'Authentication',
        'Home',
        'Registration',
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

            .otherwise({ redirectTo: '/login' });
    }])

    .run(['$rootScope', '$location', '$cookieStore', '$http',
        function ($rootScope, $location, $cookieStore, $http) {


            // Local IP
            $rootScope.serverURL = "http://192.168.1.24:8080/";


            // keep user logged in after page refresh
            $rootScope.globals = $cookieStore.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            }

            $rootScope.$on('$locationChangeStart', function (event, next, current) {

                // redirect to login page if not logged in or page is not public
                if (!$rootScope.globals.currentUser) {
                    if ($location.path() == '/registration') {
                        $location.path('/registration');
                    }
                    else if ($location.path() !== '/registration'){
                        $location.path('/login');
                    }
                }
                else {
                    $location.path('/');
                }
            });
        }]);
