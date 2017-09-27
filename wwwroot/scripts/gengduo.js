// ----------更多的渲染
var gengduo = `
     {{each gd ele}}
       <div> 
          <img src={{ele.img}}>
          <p>{{ele.title}}</p>
          <p>{{ele.price}}</p>
       </div>   
     {{/each}}
  `

// $(function () {
    function delayImageLoad() {
        setTimeout(function () {
                if ($(window).height() + $(document).scrollTop() >= $('.mgg_content').offset().top) {
                // 达到需要高度,请求更多东西信息
                   $('.jiazai_3').remove();
                $.get('/gengduo', (data) => {
                    // 渲染
                    var gd_html = template.render(gengduo, { gd: data });
                    $('.mgg_content').html(gd_html);
                })
            }
        }, 5000)
    }
    delayImageLoad();
    $(window).on('resize', delayImageLoad);
    $(document).on('scroll', delayImageLoad);
// })

// 分配未创建的.mgg_content下的div绑定事件
$('.mgg_content').on('mouseover', 'div', function () {
    $(this).css({
        border: '1px solid red'
    })
})

$('.mgg_content').on('mouseleave', 'div', function () {
    $(this).css({
        border: '1px solid white'
    })
})
