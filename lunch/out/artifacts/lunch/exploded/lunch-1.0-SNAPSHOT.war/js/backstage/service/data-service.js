myApp.factory('dataService', ['$http', '$q', function ($http, $q) {
    return {
        query: function (url) {
            var defer = $q.defer();//声明延时之后执行
            $http({
                method: "GET",
                url: url
            }).success(function (data) {
                defer.resolve(data);//声明执行成功
            }).error(function () {
                defer.reject();//声明执行失败
            });
            return defer.promise;//返回承诺,返回获取数据API
        }
    }
}]);

