// ......享品质的渲染
var xiangpz = `
    {{each xpz ele index}}
       <div class="xpz_tongyi ty_{{index}}">
       <div class="xpzcss xpz_{{index}}">
            <div class="xpz_left x_left_{{index}}">
            <h4>{{ele.title}}</h4>
            <p>{{ele.desc}}</p>
            </div>
            <img src={{ele.img}}> 
       </div>
       </div>
    {{/each}}
`
// 延迟预加载   
// $(function () {
function delayImageLoad() {
    setTimeout(function () {
        if ($(window).height() + $(document).scrollTop() >= $('.xpz_content_left').offset().top) {
            $('.jiazai_1').remove();
            $.get('/xiangpingzhi', (data) => {
                var xpz_html = template.render(xiangpz, { xpz: data });
                $('.xpz_content_left').html(xpz_html);
            })
        }

    }, 5000)
}
delayImageLoad();
$(window).on('resize', delayImageLoad);
$(document).on('scroll', delayImageLoad);
// })

$('.xpz_content_in').on('mouseover','img',function () {
    $(this).stop().animate({ 'right': '0' })
})
$('.xpz_content_in').on('mouseleave','img',function () {
    $(this).stop().animate({ 'right': '-20px' })
})



// -------直播的轮播js-----
var index_zb = 0;
var timer_zb = setInterval(changeIndex_zb, 3000);

function changeIndex_zb() {
    index_zb = index_zb >= $('.imgBox_zb>div').length - 1 ? 0 : index_zb + 1;
    changeImage_zb();
}

function changeImage_zb() {
    $('.imgBox_zb>div').eq(index_zb).stop().fadeIn('fast').siblings().stop().fadeOut('fast');
    $('.indicators_zb>span').eq(index_zb).addClass('current').siblings().removeClass('current');
}

$('#prev_zb').click(function () {
    index_zb = index_zb <= 0 ? $('.imgBox_zb>div').length - 1 : index_zb - 1;
    changeImage_zb();
})

$('#next_zb').click(function () {
    changeIndex_zb();
})

$('.indicators_zb>span').hover(function () {
    clearInterval(timer_zb);
    index_zb = $(this).index();
    changeImage_zb();
}, function () {
    timer_zb = setInterval(changeIndex_zb, 3000);
})
$('#prev_zb,#next_zb').hover(function () {
    clearInterval(timer_zb);
}, function () {
    timer_zb = setInterval(changeIndex_zb, 3000);
})


