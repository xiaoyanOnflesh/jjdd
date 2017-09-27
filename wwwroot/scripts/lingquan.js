 // ------------领券中心的移动特效
    $('.bh_tp').hover(function () {

        $(this).stop().animate({ right: '1px' })
    }, function () {
        $(this).stop().animate({ right: '15px' })
    })


    // -------觅me的渲染
    var findme = `
        {{each fm ele}}
           <div>
             <img src={{ele.img}}>
             <div>
                 <p>{{ele.mine.title}}</p>
                 <p>{{ele.mine.desc}}<span>查看原文</span></p>
                 <p>{{ele.mine.seen}}</p>
             </div>
           </div>
        {{/each}}
           
    `

    $.get('/findMe', (data) => {
        // console.log(data[0].boxBd.item);
        var fm_html = template.render(findme, { fm: data[0].boxBd.item });
        $('.imgBox_fm').html(fm_html);
    })

        var index_fm = 0;
        var timer_fm = setInterval(changeIndex_fm, 1000);

        function changeIndex_fm() {
            index_fm = index_fm >= $('.imgBox_fm>div').length - 1 ? 0 : index_fm + 1;
            changeImage_fm();
        }

        function changeImage_fm() {
            $('.imgBox_fm>div').eq(index_fm).stop().fadeIn('fast').siblings().stop().fadeOut('fast');
            $('.indicators_fm>span').eq(index_fm).addClass('current').siblings().removeClass('current');
        }

        $('#prev_fm').click(function () {
            index_fm = index_fm <= 0 ? $('.imgBox_fm>div').length - 1 : index_fm - 1;
            changeImage_fm();
        })

        $('#next_fm').click(function () {
            changeIndex_fm();
        })

        $('.indicators_fm>span').hover(function(){
            clearInterval(timer_fm);
            index_fm = $(this).index();
            changeImage_fm();
        },function(){
            timer_fm = setInterval(changeIndex_fm,1000);
        })
        $('#prev_fm,#next_fm').hover(function(){
            clearInterval(timer_fm);
        },function(){
            timer_fm = setInterval(changeIndex_fm,1000);
        })