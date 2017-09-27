// 顶部导航栏滑动显示
// 还有左侧nav的显示
$(window).scroll(function () {
	// 获取window的偏移量
	var h = $(window).scrollTop();
	// console.log(h);
	// 获取超过1850的偏移量尽进行计算
	var num_index = Math.floor(Number((h - 1850) / 550))
	// console.log(num_index);
	if ($(window).scrollTop() < 1500) {
		$('#myScrollspy').stop().fadeOut('fast');
		$('#fixed').stop().slideUp('fast');

	} else {
		$('#fixed').stop().slideDown();
		$('#myScrollspy').stop().fadeIn();

		//每次先设置li的背景颜色为灰色
		$('.left_showc li').css({ 'background-color': 'gray' })


		// 对应的Li改变颜色
		$('.left_showc li').eq(num_index).css({
			'background-color': '#D70B1C'
		})

		//如果小于得出的Index大于10或者小于-1设置第一个li红色,最后一个为灰色,防止错乱   
		if (num_index >= 10) {
			$('.left_showc li').eq(10).css({
				'background-color': '#D70B1C'
			});
			$('.left_showc li').eq(11).css({
				'background-color': 'gray'
			});
		}
		if (num_index <= -1) {
			$('.left_showc li').eq(0).css({
				'background-color': '#D70B1C'
			});
			$('.left_showc li').eq(11).css({
				'background-color': 'gray'
			});
		}
	}
});

$('.left_showc a').click(function () {
	if ($(this).index() == 0) {
		$("html,body").stop().animate({ scrollTop: 1850 + 'px' }, 1000);
	} else {
		$("html,body").stop().animate({ scrollTop: 2150 + (550 * $(this).index()) + 'px' }, 1000);
	}

	if ($(this).index() == 11) {
		$("html,body").stop().animate({ scrollTop: '0px' }, 300);
	}
})

