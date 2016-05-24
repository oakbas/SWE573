/**
 * Created by ozlemakbas on 29/04/16.
 */

'use strict';

angular.module('Registration')

    .controller('RegistrationController',
        ['$scope', 'RegistrationService',
            function ($scope, RegistrationService) {

                $scope.data = {registrationValid : false}

                $scope.submit = function () {
                    $scope.dataLoading = true;
                    var memberData =  {
                                    firstname: $scope.firstname,
                                    surname: $scope.surname,
                                    username: $scope.username,
                                    phone: $scope.phone,
                                    email: $scope.emailAddress,
                                    bio: $scope.bio,
                                    password: $scope.password,
                                    role: {id: 1}
                                  }
                    RegistrationService.submit(memberData, function (response) {
                        if(response.status == '200') {
                            $scope.dataLoading = false;
                            $scope.data.errorMsg = "Uyelik bilgileriniz eklendi. Uyeliginizin tamamlanmasi icin ucretini de odemelisin";
                            $scope.data.registrationValid = true;
                        }
                        else{
                            console.log("something is wrong");
                        }
                    });
                }
            }]);