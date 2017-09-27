// 中间轮播图的
var index = 0;
var timer = setInterval(changeIndex, 3000);

function changeIndex() {
    index = index >= $('.imgBox img').length - 1 ? 0 : index + 1;
    changeImage();
}

function changeImage() {
    $('.imgBox img').eq(index).stop().fadeIn('3000').siblings().stop().fadeOut('3000');
    $('.indicators span').eq(index).addClass('current').siblings().removeClass('current');
}

$('#prev').click(function () {
    index = index <= 0 ? $('.imgBox img').length - 1 : index - 1;
    changeImage();
})

$('#next').click(function () {
    changeIndex();
})

$('.indicators span').hover(function () {
    clearInterval(timer);
    index = $(this).index();
    changeImage();
}, function () {
    timer = setInterval(changeIndex, 3000);
})
$('.buttons>span').hover(function () {
    $(this).css('opacity', '1');
    clearInterval(timer);
}, function () {
    timer = setInterval(changeIndex, 3000);
    $(this).css('opacity', '0.3');
})


// 促销和公告一块的下滑动效果
$('#chuxiao').hover(function () {
    $('.huadong').stop().animate({
        left: 0,
    }, 'fast');
    $('.chuxiao').show();
    $('.gonggao').hide();
});
$('#gonggao').hover(function () {
    $('.huadong').stop().animate({
        left: 60
    }, 'fast');
    $('.chuxiao').hide();
    $('.gonggao').show();
})


// ------------- 左边菜单渲染-------------
    $.get('/leftmenu', (data) => {
        // 左边一级菜单渲染
        // console.log(data)
        var strHtml = '';
        data.forEach(function (ele) {
            strHtml += template('leftmenu_demo', ele);
        });
        $('.leftmenu').html(strHtml);
        
        // 左边的菜单移入出现二级效果
        $('.leftkeyword li').each(function () {
            $(this).hover(function () {
                //先清空所有的li背景颜色
                $('.leftkeyword li').css('background-color', '#6E6568')
                // 再给当前移动的li附上背景颜色
                $(this).css('background-color', '#999395')
                // 先清空所有二级菜单的显示
                $('.leftmenu_erji>div').hide();
                // 再获取当前一定的li的index
                // 根据index来显示对应的二级菜单
                $('.leftmenu_erji>div').eq($(this).index()).css({
                    display:'block',
                })
            })
        })

        $('.leftkeyword').mouseleave(function () {
            $('.leftkeyword li').css('background-color', '#6E6568')
            $('.leftmenu_erji>div').hide();
        })

    }, 'json')



// --------左边的二级菜单
var ejcd_text=`
   {{each ejcd ele}}
       {{each ele a}}
          <div>

           <div class="shangmian_wz">
            <p>
             {{each a.catePartL.channel ele}}
               <span><a href="">{{ele.text}}&nbsp;></a></span>
              {{/each}}
           </p>

          <div class="zj_wz">
          {{each a.catePartL.detail ele}}
            <div>
            <p><a href="">{{ele.tit.text}}&nbsp;></a></p>
            <p>
             {{each ele.con ele}}
              <span><a href="">{{ele.text}}</a></span>
             {{/each}}
             </p>
            </div> 
          {{/each}}
          </div>
          
          </div>

          <div class="xia_tu">
             <div>
             {{each a.catePartR.brand ele}}
                <img src={{ele.img}}>
             {{/each}}
             </div>  
             
             <div>
             {{each a.catePartR.promo ele}}
              <img src={{ele.img}}>
             {{/each}}
              </div>
          </div>

         </div> 
       {{/each}}
   {{/each}}
`
$.get('/zuobianerji',(data)=>{
    // console.log(data);
     var ejcd_html = template.render(ejcd_text, { ejcd:data});
        $('.leftmenu_erji').html(ejcd_html);

       $('.shangmian_wz>p span').hover(function () {
            $(this).css({
            'background-color':'#6E6568'
            })
        },function () {
             $(this).css({
            'background-color':'gray'
            })
        })   
})


// 话费一栏的特效
$('.chulai_show td:not(:last)').hover(function () {
    console.log($(this).index())
    $('.hf_red').css({
        left:46.5*($(this).index())+'px'
    },'fast')
     $('.huafei_show').animate({
         top:'0px'
     }).show();
   
})

$('.huafei_close').click(function () {
    $('.huafei_show').css({
        top:'100%'
    }).hide();

})

$('.hf_sm span').hover(function () {
    $('.hf_red').stop().animate({
        left:46.5*($(this).index())+'px'
    },'fast')
})


    