myApp.controller('loginCtrl', function($scope){
    if(window.sessionStorage.getItem("username") && window.sessionStorage.getItem("username") != ""){
        window.location.href = "#/manage";
        console.log(234);
    }
    $scope.login = function () {
        var user = {
            username: $scope.username,
            password: $scope.password
        };
        if(user.username == "defore") {
            if(user.password == "1") {
                window.sessionStorage.setItem("username", user.username);
                $scope.username = "";
                $scope.password = "";
                $scope.msg = "";
                window.location.href = "#/manage";
            } else {
                $scope.msg = "密码输入错误";
            }
        } else {
            $scope.msg = "用户不存在";
        }
    };
    
    $scope.logout = function () {
        window.sessionStorage.removeItem("username");
        // $scope.isLogin = window.sessionStorage.getItem("username");
        window.location.href = "#/";
    };
});