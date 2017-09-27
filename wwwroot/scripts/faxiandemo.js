// ----------发现好货渲染
    var faxian = `
    {{each fx ele index}}
        <div>
           <p>{{ele.text}}</p>
           <img src={{ele.img}}>    
        </div>
    {{/each}}
    `
    $.get('/faxian', (data) => {
        var faxian_html = template.render(faxian, { fx: data[0].boxBd.item });
        $('.faxian_content').html(faxian_html);
        $('.faxian_content img').hover(function () {
            $(this).stop().animate({ right: '20px' })
        }, function () {
            $(this).stop().animate({ right: '10px' })
        })
    })

    // ---------会买渲染
    var huimai = `
    {{each hm ele index}}
         <div>
         {{each ele obj}}
           <div>
           <p class="huimai_bt">{{obj.title}}</p>
           <div class="tupian">{{each obj.imgs a}}<img src={{a}}>{{/each}}</div>
           </div>
        {{/each}}
        </div>
    {{/each}}
    `
    $.get('/huimai', (data) => {
        // console.log(data[0].boxBd.item);
        var huimai_html = template.render(huimai, { hm: data[0].boxBd.item });
        $('.imgBox_hm').html(huimai_html);

        // 会买轮播的js
        var num = 0;
        var num_time = setInterval(changeIndex_hm, 2000);
        function changeIndex_hm() {
            num = num >= $('.imgBox_hm>div').length - 1 ? 0 : num + 1;
            changeImage_hm();
        }

        function changeImage_hm() {
            $('.imgBox_hm>div').eq(num).stop().fadeIn('fast').siblings().stop().fadeOut('fast');
            $('.indicators_hm span').eq(num).addClass('current').siblings().removeClass('current');
        }

        $('#prev_hm').click(function () {
            num = num <= 0 ? $('.imgBox_hm>div').length - 1 : num - 1;
            changeImage_hm();
        })

        $('#next_hm').click(function () {
            changeIndex_hm();
        })

        $('.indicators_hm span').hover(function () {
            clearInterval(num_time);
            num = $(this).index();
            changeImage_hm();
        }, function () {
            num_time = setInterval(changeIndex_hm, 2000);
        })
        $('#prev_hm,#next_hm').hover(function () {
            clearInterval(num_time);
        }, function () {
            num_time = setInterval(changeIndex_hm, 2000);
        })
    })

    // -----------排行榜的渲染
    var paihan = `
         {{each ph ele index}}
          <div class="sjtp_rq">
          {{each ele aa index}}
            <div class="sjtp_div">
             <img src="{{aa.img}}" class="haha">
             <p class="yc">{{aa.text}}</p> 
            </div> 
          {{/each}}
          </div>
         {{/each}}
    `
    $.get('/paihanban', (data) => {
        // console.log(data[0].boxBd.item);
        var ph_html = template.render(paihan, { ph: data[0].boxBd.item });
        $('.ph_neirong').html(ph_html);

    })

    $('.ph_bt p').hover(function () {
        $('.red_gundong').stop().animate({
            left:$(this).index()*78+'px'
        },'fast')
        $('.sjtp_rq').hide();
        $('.sjtp_rq').eq($(this).index()).show();
    })