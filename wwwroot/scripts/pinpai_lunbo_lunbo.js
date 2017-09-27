	// 品牌秒杀的轮播图
var index_c = 0;
var timer_c = setInterval(changeIndex_c, 2500);

function changeIndex_c() {
    index_c = index_c >= $('.paihan_imgBox img').length - 1 ? 0 : index_c + 1;
    changeImage_c();
}

function changeImage_c() {
    $('.paihan_imgBox img').eq(index_c).stop().fadeIn().siblings().stop().fadeOut();
    $('.paihan_indicators span').eq(index_c).addClass('current').siblings().removeClass('current');
}


$('.paihan_indicators span').hover(function () {
    clearInterval(timer_c);
    index_c = $(this).index();
    changeImage_c();
}, function () {
    timer_c = setInterval(changeIndex_c, 2500);
})