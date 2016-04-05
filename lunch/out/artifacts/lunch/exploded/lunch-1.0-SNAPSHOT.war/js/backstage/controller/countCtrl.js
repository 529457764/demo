myApp.controller('countCtrl', function ($scope, $rootScope, loginService) {
    $rootScope.nav = "count";
    loginService.isLogined();


    //模拟数据
    //订单详情
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
        }, {//date:2016-03-31 type:0
            location: '17楼',
            date: '2016-03-31',
            aCount: 10,
            bCount: 20,
            cCount: 30,
            type: "0"
        }, {//date:2016-03-31 type:0
            location: '18楼',
            date: '2016-03-31',
            aCount: 50,
            bCount: 60,
            cCount: 70,
            type: "0"
        }, {//date:2016-03-31 type:0
            location: '创客',
            date: '2016-03-31',
            aCount: 90,
            bCount: 100,
            cCount: 32,
            type: "0"
        },{//date:2016-04-01 type:0
            location: '17楼',
            date: '2016-04-01',
            aCount: 10,
            bCount: 20,
            cCount: 30,
            type: "0"
        }, {//date:2016-04-01 type:0
            location: '18楼',
            date: '2016-04-01',
            aCount: 50,
            bCount: 60,
            cCount: 70,
            type: "0"
        }, {//date:2016-04-01 type:0
            location: '创客',
            date: '2016-04-01',
            aCount: 90,
            bCount: 100,
            cCount: 32,
            type: "0"
        }, {//date:2016-04-02 type:0
            location: '17楼',
            date: '2016-04-02',
            aCount: 1,
            bCount: 2,
            cCount: 3,
            type: "0"
        }, {//date:2016-04-02 type:0
            location: '18楼',
            date: '2016-04-02',
            aCount: 10,
            bCount: 22,
            cCount: 43,
            type: "0"
        }, {//date:2016-04-02 type:0
            location: '创客',
            date: '2016-04-02',
            aCount: 51,
            bCount: 62,
            cCount: 73,
            type: "0"
        }
    ];

    //用户详情
    var user = [
        {//date:2016-03-31 type:0
            location: '创客',
            date: '2016-03-31',
            name: "Defore",
            type: "1",
            meat: "A",
            status: "1"
        }, {
            location: '创客',
            date: '2016-03-31',
            name: "小黑",
            type: "1",
            meat: "B",
            status: "1"
        }, {//date:2016-03-31 type:0
            location: '17楼',
            date: '2016-03-31',
            name: "A菌",
            type: "1",
            meat: "A",
            status: "1"
        }, {
            location: '18楼',
            date: '2016-04-01',
            name: "B菌",
            type: "2",
            meat: "B",
            status: "2"
        },{//date:2016-03-31 type:0
            location: '创客',
            date: '2016-04-01',
            name: "Defore",
            type: "1",
            meat: "A",
            status: "1"
        }, {
            location: '创客',
            date: '2016-04-01',
            name: "小黑",
            type: "1",
            meat: "B",
            status: "1"
        }, {//date:2016-03-31 type:0
            location: '17楼',
            date: '2016-04-01',
            name: "A菌",
            type: "1",
            meat: "A",
            status: "1"
        }, {
            location: '18楼',
            date: '2016-04-02',
            name: "B菌",
            type: "2",
            meat: "B",
            status: "2"
        }, {
            location: '18楼',
            date: '2016-04-02',
            name: "C菌",
            type: "1",
            meat: "A",
            status: "1"
        }
    ];

    //初始化
    $scope.date = new Date();
    $scope.type = "0";

    $scope.search = function (type) {
        // type "0"->订单详情  "1"->用户详情  "2"->未领取详情
        var typeValue = (type == 'undefined')? type: type;
        // console.log(typeValue);

        $scope.type = typeValue;

        var date = $scope.date.pattern("yyyy-MM-dd");

        if($scope.type == "0") {
            //0.订单详情
            //日期筛选
            var arr = new Array();
            angular.forEach(data, function (data, index, array) {
                if(array[index].date == date) {
                    arr.push(array[index]);
                }
            });
            $scope.list = arr;
            //统计
            var aNum = 0, bNum = 0, cNum = 0;
            for(i in arr) {
                aNum += arr[i].aCount;
                bNum += arr[i].bCount;
                cNum += arr[i].cCount;
            }
            $scope.aCountNum = aNum;
            $scope.bCountNum = bNum;
            $scope.cCountNum = cNum;

        } else if($scope.type == "1") {
            //1.用户详情
            var arr = new Array();
            angular.forEach(user, function (data, index, array) {
                if(array[index].date == date) {
                    arr.push(array[index]);
                }
            });
            $scope.list = arr;
        }/*
        else if($scope.type == "2") {
            //2.未领取详情
            var arr = new Array();
            angular.forEach(user, function (data, index, array) {
                if(array[index].date == date && array[index].type == $scope.type) {
                    arr.push(array[index]);
                }
            });
            $scope.list = arr;
        }
        */

    };
    $scope.search(0);
});


//领取状态过滤器
myApp.filter('getValueByStatus', function() {
    //初始化套餐列表
    var statusList = [
        {
            value: "未领取",
            key: "1"
        }, {
            value: "已领取",
            key: "2"
        }
    ];
    return function (key) {
        var arr = statusList;
        var value = "";
        for(i in arr) {
            if(key == arr[i].key) {
                value = arr[i].value;
            }
        }
        return value;
    }
});