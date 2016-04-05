myApp.directive('headerNav', function () {
    return {
        restrict: 'E',
        templateUrl: 'html/backstage/tpl/head.html',
        scope: {
            username: "@",
            password: "@",
            msg: "@",
            isLogin: "@"
        },
        controller: function ($scope) {
            $scope.isLogin = window.sessionStorage.getItem("username");
            $scope.login = function () {
                var user = {
                    username: $scope.username,
                    password: $scope.password
                };
                if(user.username == 'defore') {
                    if(user.password == '1') {
                        $scope.msg = "";
                        $('#loginBox').modal('hide');
                        window.sessionStorage.setItem("username", user.username);
                        $scope.isLogin = window.sessionStorage.getItem("username");
                        $scope.username = "";
                        $scope.password = "";
                        window.location.href = "#/post";
                    } else {
                        $scope.msg = "密码错误";
                    }
                } else {
                    $scope.msg = "用户名输入错误";
                }
            }
            $scope.logout = function () {
                window.sessionStorage.removeItem("username");
                $scope.isLogin = window.sessionStorage.getItem("username");
                window.location.href = "#/";
            }

        }
    };
});