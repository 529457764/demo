myApp.directive('countList', function () {
    return {
        restrict: 'E',
        templateUrl: 'html/backstage/count-list.html',
        scope: {
            list: "@",
            date: "@",
            type: "@",
            typeValue: "@"
        },
        controller: function ($scope) {
            $scope.type = [
                {
                    key: "全部",
                    value: "0"
                }, {
                    key: "已销售",
                    value: "1"
                }, {
                    key: "未销售",
                    value: "2"
                }
            ];
            //模拟数据
            var data = [
                {//date:2016-03-30 type:0
                    location: '17楼',
                    date: '2016-03-30',
                    aCount: 10,
                    bCount: 20,
                    cCount: 30,
                    type: "0"
                }, {//date:2016-03-30 type:0
                    location: '18楼',
                    date: '2016-03-30',
                    aCount: 50,
                    bCount: 60,
                    cCount: 70,
                    type: "0"
                }, {//date:2016-03-30 type:0
                    location: '创客',
                    date: '2016-03-30',
                    aCount: 90,
                    bCount: 100,
                    cCount: 32,
                    type: "0"
                }, {//date:2016-03-29 type:0
                    location: '17楼',
                    date: '2016-03-29',
                    aCount: 1,
                    bCount: 2,
                    cCount: 3,
                    type: "0"
                }, {//date:2016-03-29 type:0
                    location: '18楼',
                    date: '2016-03-29',
                    aCount: 10,
                    bCount: 22,
                    cCount: 43,
                    type: "0"
                }, {//date:2016-03-29 type:0
                    location: '创客',
                    date: '2016-03-29',
                    aCount: 51,
                    bCount: 62,
                    cCount: 73,
                    type: "0"
                },{//date:2016-03-30 type:1
                    location: '17楼',
                    date: '2016-03-30',
                    aCount: 999,
                    bCount: 888,
                    cCount: 111,
                    type: "1"
                }, {//date:2016-03-30 type:1
                    location: '18楼',
                    date: '2016-03-30',
                    aCount: 24,
                    bCount: 566,
                    cCount: 777,
                    type: "1"
                }, {//date:2016-03-30 type:1
                    location: '创客',
                    date: '2016-03-30',
                    aCount: 95,
                    bCount: 2220,
                    cCount: 444,
                    type: "1"
                }
            ];

            //初始化
            // $scope.list = data;
            $scope.date = new Date();
            $scope.typeValue = "0";

            //查询
            $scope.search = function () {
                var typeValue = $scope.typeValue;
                var date = $scope.date.pattern("yyyy-MM-dd");
                console.log("typeValue: " + typeValue);
                console.log("date: " + date);
                //日期和类型筛选
                var arr = new Array();
                angular.forEach(data, function (data, index, array) {
                    if(array[index].date == date && array[index].type == typeValue) {
                        arr.push(array[index]);
                    }
                });

                $scope.list = arr;

            }
            $scope.search();
        }
    }
});