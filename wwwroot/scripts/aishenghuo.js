// -----爱生活的渲染
var aishenghuo = `
   {{each ash ele index}}
    <section>
         <div class="ai_bt ai_bt_{{index}}">
           <h3>{{ele.title}}<img src="http://misc.360buyimg.com/mtd/pc/index/2.0.0/home/images/pt_qrcode@1x.png" class=ag_ewm></h3>
           <div>
              {{each ele.tags wz}} 
              <p>{{wz.text}}</p>
              {{/each}}         
           </div>
         </div>

         <div class"jb">
            {{each ele.body tu}}
                 <div class="fzc f_{{index}}"><img src={{tu.cover.img}}></div>
                 <div class="ash_rg a_{{index}}">
                 {{each tu.pbi ele}}
                    <div class="ash_rg_in">
                    <h5>{{ele.title}}</h5>
                    <p>{{ele.promo}}</p>
                    <img src={{ele.img}}>
                    </div>
                  {{/each}}   
                 </div>
                 <div class="sanzhang s_{{index}}">
                   {{each tu.more ele}}
                     <div class="s_yidong">
                     <img src={{ele.img}}>
                     </div>
                  {{/each}}
                 </div> 
            {{/each}}

                  <div class="ash_foot" id=floor_{{index}}>
                   {{if ele.foot.length==24||ele.foot.length==20}}
                     {{each ele.foot ele index}}
                     {{if index>5&&index<12}}
                     <img src={{ele.img}}>
                     {{/if}}
                     {{/each}}
                    {{else}}
                     {{each ele.foot ele index}}
                     {{if index>11&&index<24}}
                     <img src={{ele.img}}>
                     {{/if}}
                     {{/each}}
                   {{/if}}
                 </div>
         </div>  
    </section>
   {{/each}}
`

// $(function () {
    function delayImageLoad() {
        setTimeout(function () {
            if ($(window).height() + $(document).scrollTop() >= $('.show_neirong').offset().top) {
                $('.jiazai_2').remove();
                // 预加载
                $.get('/aishenghuo', (data) => {
                    // console.log(data);

                    var ash_html = template.render(aishenghuo, { ash: data });
                    $('.show_neirong').html(ash_html);

                    $('.fzc img').hover(function () {
                        $(this).stop().animate({
                            right: '0px'
                        }, 'fast')
                    }, function () {
                        $(this).stop().animate({
                            right: '-10px'
                        }, 'fast')
                    })

                    $('.ash_rg_in').hover(function () {
                        $(this).find('img').stop().animate({
                            left: '70px'
                        }, 'fast')
                    }, function () {
                        $(this).find('img').stop().animate({
                            left: '80px'
                        }, 'fast')
                    })

                    $('.s_yidong').hover(function () {
                        $(this).find('img').stop().animate({
                            right: '0px'
                        }, 'fast')
                    }, function () {
                        $(this).find('img').stop().animate({
                            right: '-5px'
                        }, 'fast')
                    })


                    // 样式设定
                    $('.f_4').eq(1).css({
                        position: 'absolute',
                        top: '59px',
                        right: '395px'
                    })
                    $('.s_4').eq(1).css({
                        position: 'absolute',
                        top: '328px',
                        right: '12px'
                    })

                    $('.f_7').eq(1).css({
                        position: 'absolute',
                        top: '59px',
                        right: '395px'
                    })
                    $('.s_7').eq(1).css({
                        position: 'absolute',
                        top: '328px',
                        right: '12px'
                    })

                    var bgys = ['#994576', '#D35D79', '#744E8B', '#5A698F', '#4388A6', '#35A6A4', '#508977', '#ECB028', '#E4653C', '#A1643F', '#705952', '#844D4D', '#5E5D9A', '#526C51', '#4F7799', '#6F872B'];
                    var color = ['#AF6991', '#D45D79', '#8D6FA1', '#7683A5', '#689FB6', '#56B2B1', '#719F91', '#EEBD54', '#EA805E', '#B08163', '#86716A', '#9A6B6B', '#7C79AB', '#728771', '#6C8CA7', '#8B9D52'];
                    for (var i = 0; i < $('.ai_bt ').length; i++) {
                        $('.ai_bt ').eq(i).css({
                            'background-color': bgys[i],
                        })
                        $('.ai_bt ').eq(i).find('p').css({
                            'background-color': color[i],
                        })
                    }

                    $('.ai_bt p').hover(function () {
                        $(this).css({
                            'box-shadow': '0 0 10px white',

                        })
                    }, function () {
                        $(this).css({
                            'box-shadow': '0 0 2px white'
                        })
                    })
                })


            }
        }, 5000)
    }
    delayImageLoad();
    $(window).on('resize', delayImageLoad);
    $(document).on('scroll', delayImageLoad);
// })

