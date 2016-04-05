myApp.controller('loginCtrl',function ($scope, $http, $cookieStore) {
    $scope.msg = "";
    $scope.user = {
        username : "",
        password : ""
    };
    //登陆
    $scope.post = function () {
        if($scope.user.username == 'defore') {
            if($scope.user.password == '123456') {
                $scope.msg = "";
                $('#loginBox').modal('hide');
                window.sessionStorage.setItem("username", $scope.user.username);
                //$cookieStore.put("user", person);
                window.location.href = "#/post";
            } else {
                $scope.msg = "密码错误";
            }
        } else {
            $scope.msg = "用户名输入错误";
        }
        /*
        //把用户信息提交到后台
        $http.post('url', person)
            .success(function (data) {
                window.location.href = "http://www.baidu.com";
            })
            .error(function (){
                // window.location.href = "http://www.sina.com.cn/";
                window.location.href = "#/post";
                console.log(person);
            });
         */
    }


    // if($cookieStore.get("user") != null) {
    //     $("#headBox").empty();
    //     var str = '';
    //     str += '<button class="btn btn-success">'+ $cookieStore.get("user").username +'</button>';
    //     $("#headBox").append(str);
    // }
})