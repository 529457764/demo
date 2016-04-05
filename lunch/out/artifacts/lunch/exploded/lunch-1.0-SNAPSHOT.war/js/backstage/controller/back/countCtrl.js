myApp.controller('countCtrl', function ($rootScope, $scope, loginService) {
    $rootScope.nav = "count";
    // if(window.sessionStorage.getItem("username") == "" || window.sessionStorage.getItem("username") == null) {
    //     $rootScope.warning = "请先登录用户";
    //     window.location.href = "#/";
    //     $('#loginBox').modal('show');
    // }

    loginService.isLogined();
});