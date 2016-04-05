myApp.controller('manageCtrl', function ($scope, $rootScope, loginService, dataService) {
    $rootScope.nav = "manage";
    loginService.isLogined();

    var promise = dataService.query('resource/jsonDate.json');
    promise.then(function (data) {
        $scope.test = data;//承诺用接口resolve()
    }, function () {
        console.log("获取失败");//承诺使用接口reject()
    });

    //初始化套餐列表
    var lunchList = [
        {
            value: "白灼虾+汤爆双脆",
            key: "1"
        }, {
            value: "海鲜卤面+大虾烧白菜",
            key: "2"
        }, {
            value: "萝卜牛腩+青瓜炒肉片",
            key: "3"
        }, {
            value: "酱猪蹄+辣炒蛤蜊",
            key: "4"
        }, {
            value: "一品豆腐+回锅肉",
            key: "5"
        }, {
            value: "家常烧牙片鱼+菊花虾包",
            key: "6"
        }, {
            value: "麻婆豆腐+馄饨",
            key: "7"
        }
    ];
    //测试日期

    var data = [
        {
            id: 100,
            date: "2016-03-31",
            modTime: "8:00",
            selectKeyA: "4",
            selectKeyB: "6",
            selectKeyC: "7",
            isPush: "1"
        },
        {
            id: 1,
            date: "2016-04-05",
            modTime: "8:00",
            selectKeyA: "2",
            selectKeyB: "4",
            selectKeyC: "1",
            isPush: "1"
        }, {
            id: 2,
            date: "2016-04-06",
            modTime: "9:00",
            selectKeyA: "3",
            selectKeyB: "5",
            selectKeyC: "6",
            isPush: "0"
        }, {
            id: 3,
            date: "2016-04-07",
            modTime: "7:00",
            selectKeyA: "1",
            selectKeyB: "2",
            selectKeyC: "3",
            isPush: "0"
        }, {
            id: 4,
            date: "2016-04-08",
            modTime: "9:00",
            selectKeyA: "3",
            selectKeyB: "1",
            selectKeyC: "7",
            isPush: "0"
        }
    ];

    // var data = new Array();


    //初始化
    $scope.init = function () {
        $scope.date = new Date();
        var dateValue = $scope.date.pattern("yyyy-MM-dd");
        // $scope.dateList = data;
        var arr = new Array();
        angular.forEach(data, function (data, index, array) {
            if(array[index].date >= dateValue) {
                arr.push(array[index]);
            }
        });
        $scope.dateList = arr;
    };
    $scope.init();

    //删除
    $scope.deleteItem = function (date) {
        //根据日期获取某日菜单,并删除
        var arr = data;
        angular.forEach(arr, function (data, index, array) {
            if(date == array[index].date) {
                array.splice(index, 1);
            }
        });
        $scope.init();
    };

    //修改
    $scope.modItem = function (date) {
        //根据日期获取某日菜单,修改菜单信息
        $scope.newItem(date);
    };

    //发布
    $scope.pushItem = function (date) {
        //根据日期获取某日菜单,修改发布状态
        //后期改成,修改数据库字段
        var arr = data;
        angular.forEach(arr, function (data, index, array) {
            if(date == array[index].date) {
                array[index].isPush = "1";
            }
        });
    };
    //新建
    $scope.newItem = function (date) {
        //获取菜式列表
        $scope.selectA = lunchList;
        $scope.selectB = lunchList;
        $scope.selectC = lunchList;
        var dateFormat;//以字符串的形式获取date
        if(typeof date == "object") {
            dateFormat = date.pattern("yyyy-MM-dd");
        } else {
            dateFormat = date;
        }
        $scope.date = new Date(dateFormat);//弹框的日期设置为要修改的日期
        //发送日期过去,获取当日详情
        //比如获得
        for(i in data) {
            if(dateFormat == data[i].date) {
                var item = {
                    id: data[i].id,
                    date: data[i].date,
                    modTime: data[i].modTime,
                    selectKeyA: data[i].selectKeyA,
                    selectKeyB: data[i].selectKeyB,
                    selectKeyC: data[i].selectKeyC
                }
            }
        }
        if(item != null) {
            $scope.selectKeyA = item.selectKeyA;
            $scope.selectKeyB = item.selectKeyB;
            $scope.selectKeyC = item.selectKeyC;
        } else {
            $scope.selectKeyA = lunchList[0].key;
            $scope.selectKeyB = lunchList[0].key;
            $scope.selectKeyC = lunchList[0].key;
        }

        $("#addBox").modal('show');
    };



    //修改完成提交到后台
    $scope.addOne = function (date) {
        // var date = $scope.date.pattern("yyyy-MM-dd");
        var dateFormat;//以字符串的形式获取date
        if(typeof date == "object") {
            dateFormat = date.pattern("yyyy-MM-dd");
        } else {
            dateFormat = date;
        }
        var selectKeyA = $scope.selectKeyA;
        var selectKeyB = $scope.selectKeyB;
        var selectKeyC = $scope.selectKeyC;

        //按日期排序
        function keyStr (key, desc) {
            //key->排序数组对象的键值, desc->是否要正序,true/false
            return function (a, b) {
                return desc ? (a[key]<b[key]) : (a[key]>b[key]);
            }
        }
        var flag = "0";
        angular.forEach(data, function (data, index, array) {
            //if(date === array[index].date) {
            if(dateFormat == array[index].date) {
                if(array[index].isPush == "0") {
                    console.log("更改了数据的日期:"+array[index].date);
                    array[index].selectKeyA = selectKeyA;
                    array[index].selectKeyB = selectKeyB;
                    array[index].selectKeyC = selectKeyC;
                    flag = "1";
                } else if (array[index].isPush == "1" ) {
                    flag = "2";
                }
            }
        });
        if(flag == "0") {
            var item = {
                id: 111,
                date: dateFormat,
                selectKeyA: selectKeyA,
                selectKeyB: selectKeyB,
                selectKeyC: selectKeyC,
                modTime: "9:00",
                isPush: "0"
            };
            data.push(item);
            data.sort(keyStr('date', false));
        }
        $scope.init();
        $("#addBox").modal('hide');
        console.log(data);
    };

});

//定义一个过滤器,通过value找到key;
myApp.filter('getSelectValue', function(dataService, $timeout) {
    //ajax方法实现请求,并赋值
    // $http({
    //     url: "resource/jsonDate.json",
    //     method: "GET"
    // }).success(function (data) {
    //     // console.log(data);
    //     list = data;
    // }).error(function () {
    //     console.log("请求失败")
    // });
    // setTimeout(function (){
    //     console.log(list);
    // }, 500);

    var list;
    var promise = dataService.query('resource/jsonDate.json');
    promise.then(function (data) {
        list = data;//承诺用接口resolve()
    }, function () {
        console.log("获取失败");//承诺使用接口reject()
    });
    //初始化套餐列表
    var lunchList = [
        {
            value: "白灼虾+汤爆双脆",
            key: "1"
        }, {
            value: "海鲜卤面+大虾烧白菜",
            key: "2"
        }, {
            value: "萝卜牛腩+青瓜炒肉片",
            key: "3"
        }, {
            value: "酱猪蹄+辣炒蛤蜊",
            key: "4"
        }, {
            value: "一品豆腐+回锅肉",
            key: "5"
        }, {
            value: "家常烧牙片鱼+菊花虾包",
            key: "6"
        }, {
            value: "麻婆豆腐+馄饨",
            key: "7"
        }
    ];


    return function (key) {
        var arr = lunchList;
        var value = "";
        for(i in arr) {
            if(key == arr[i].key) {
                value = arr[i].value;
            }
        }
        return value;
    }
});