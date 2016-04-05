myApp.controller('postCtrl', function ($rootScope, $scope, loginService) {
    $rootScope.nav = "post";
    loginService.isLogined();
    $scope.people = [
        {
            name: 'Jack',
            age: 12
        }, {
            name: 'Tom',
            age: 11
        }, {
            name: 'jason',
            age: 13
        }];
});