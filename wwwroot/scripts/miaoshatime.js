// 创建并获取目标时间的时间戳
    var targetDate = new Date('2017-09-27 00:00:00').getTime();
    // 获取当前时间的时间戳
    var nowDate = new Date().getTime();
    // 获取时间差(s)
    var time = Math.floor((targetDate - nowDate) / 1000);
    var MIN = 60;
    var HOUR = 60 * MIN;
    var DAY = 24 * HOUR;

    function handleStr(str) {
        str = str >= 0 ? '0' + str : "00";
        return str.substr(-2);
    }

    function showTime() {
        // 1 *  24 * 60 * 60  + 45s
        // 得到有多少天 
        var days = Math.floor(time / DAY);
        if (days < 100) {
            days = handleStr(days);
        }
        // 得到有多少小时
        var hours = Math.floor(time % DAY / HOUR);
        // 得到有多少分钟
        var minutes = Math.floor(time % HOUR / MIN);
        // 得到有多少秒
        var seconds = Math.floor(time % MIN);

        var resultStr = '';
        if (time <= 0) {
            // 倒计时是否结束，小于0表示已经结束
            resultStr = '结束了';
        } else if (days < 1) {
            // 判断天数是否是小于1的
            if (hours < 1) {
                // 判断小时数时候是小于1的
                if (minutes < 1) {
                    // 判断分钟数是否是小于1的
                    resultStr = `
                     当前场次: 
                     <span class="hour">${handleStr(hours)}</span><span class="dian">:</span>
                     <span class="min">${handleStr(minutes)}</span><span class="dian">:</span>
                     <span class="second">${handleStr(seconds)}</span>
                     后结束抢购
                                `
                } else {
                    resultStr = `
                     当前场次: 
                     <span class="hour">${handleStr(hours)}</span><span class="dian">:</span>
                     <span class="min">${handleStr(minutes)}</span><span class="dian">:</span>
                     <span class="second">${handleStr(seconds)}</span>
                     后结束抢购
                                `
                }
            } else {
                resultStr = `
                     当前场次: 
                     <span class="hour">${handleStr(hours)}</span><span class="dian">:</span> 
                     <span class="min">${handleStr(minutes)}</span><span class="dian">:</span>
                     <span class="second">${handleStr(seconds)}</span>
                     后结束抢购
                                `
            }
        }
        document.querySelector('.daojishi').innerHTML = resultStr;
    }

    // setInterval(function() {
    //     time --;
    //     showTime();
    // },1000)

    function count() {
        showTime();

        // setTimeout(function () {
        //     function callback() {
        //         time--;
        //         showTime();
        //         setTimeout(callback, 1000);
        //     }
        //     callback();
        // }, 1000);

        setTimeout(function () {
            time--;
            showTime();
            // arguments 是一个类似数组的对象, 对应于传递给函数的参数。
            // arguments.callee 属性包含当前正在执行的函数。
            setTimeout(arguments.callee, 1000);
        }, 1000);
    }
    count();

    function jieCheng(num) {
        if (num <= 1) {
            return 1;
        } else {
            // return num * arguments.callee(num-1);
            return num * jieCheng(num - 1);
        }
    }

    console.log(jieCheng(4));