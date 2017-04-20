var app = require('app');
var tmpHeader = require('./header.html');
var loginV2Tmp = require('page/login/login.html');
require('page/login/loginCtrl.js');

app.directive('jmHeader', function (dialogs) {
    return {
        restrict: 'AE',
        templateUrl: tmpHeader,
        replace: true,
        controller: function ($scope, $state, User) {
            $scope.user = User.user;


            $scope.state = $state;

            // 弹出登录框
            $scope.modalV2 = function ($event) {
                $event.preventDefault();
                var a = dialogs.modal({
                    method: 'login',
                    className: 'login-from',
                    backdropClass: 'in',
                    templateUrl: loginV2Tmp,
                    success: function (data) {
                        var result = data.data.data;
                        alert('tick')
                    },
                    controller: 'loginCtrl'
                })
            }
        }
    };
});