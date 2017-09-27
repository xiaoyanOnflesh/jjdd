$('.ms_imgBox .img').each(function (index, item) {
    $(this).css({
        left: index * 972
    })
})

// 表示起始图片和当前轮播到的图片索引
var index_b = 0;
// 上一张轮播图片的索引
var lastIndex_b = 0;

// 点击上一张时，获取将要显示图片的索引
function getPrevIndex_b() {
    return index_b <= 0 ? $('.ms_imgBox .img').length - 1 : index_b - 1;
}
// 点击下一张时，获取将要显示图片的索引
function getNextIndex_b() {
    return index_b >= $('.ms_imgBox .img').length - 1 ? 0 : index_b + 1;
}

// 显示下一张图片
function showNextImage_b() {
    // 获取当前需要显示图片的索引
    index_b = getNextIndex_b();

    $('.ms_imgBox .img').eq(index_b).finish().css({
        left: 972
    }).animate({
        left: 0
    }, 500)

    $('.ms_imgBox .img').eq(lastIndex_b).finish().animate({
        left: -972
    }, 500)
    lastIndex_b = index_b;
}

// 显示上一张图片
function showPrevImage_b() {
    index_b = getPrevIndex_b();
    $('.ms_imgBox .img').eq(index_b).finish().css({
        left: -972
    }).animate({
        left: 0
    }, 500);

    $('.ms_imgBox .img').eq(lastIndex_b).finish().animate({
        left: 972
    }, 500)
    lastIndex_b = index_b;
}

$('#ms_next').click(function () {
    showNextImage_b();
})

$('#ms_prev').click(function () {
    showPrevImage_b();
})

// 自动播放
// var timer = setInterval(showNextImage_b, 2000);

function showImage_b() {
    $('.ms_imgBox .img').eq(index_b).finish().css({
        left: 972
    }).animate({
        left: 0
    }, 500) 

    $('.ms_imgBox .img').eq(lastIndex_b).finish().animate({
        left: -972
    }, 500)
    lastIndex_b = index_b;
}

$('.ms_indicators span').hover(function () {
    clearInterval(timer_b);
    // 当前鼠标所在span的索引
    index_b = $(this).index();
    if (index_b > lastIndex_b) {
        index_b = index_b - 1;
        showNextImage_b();
    } else if (index_b < lastIndex_b) {
        index_b = index_b + 1;
        showPrevImage_b();
    } else {
        // 相等时，不改变
    }
}, function () {
    timer_b = setInterval(showNextImage_b, 2000);
})

var timer_b //报错的修改.未声明timer_b

// $('#ms_prev,#ms_next').hover(function () {
//     clearInterval(timer_b);
// })


// 轮播的鼠标移入效果

$('.img img').hover(function () {
    $(this).stop().animate({
        top: 10
    }, 'fast');
}, function () {
    $(this).stop().animate({
        top: 20
    }, 'fast');
})

$('.img p').hover(function () {
    $(this).css('color', 'red').prev().find('img').stop().animate({
        top: 10
    }, 'fast');
}, function () {
    $(this).css('color', 'black').prev().find('img').stop().animate({
        top: 20
    }, 'fast');
})

// 轮播移动出现左右点击图标
$('.img').hover(function () {
    $('#ms_prev,#ms_next').stop().animate({ opacity: 0.6})
}, function () {
    $('#ms_prev,#ms_next').stop().animate({ opacity: 0 })
})

$('#ms_prev,#ms_next').hover(function () {
    $(this).stop().animate({ opacity: 1 })
    clearInterval(timer_b);
}, function () {
    $(this).stop().animate({ opacity: 0.6})
})