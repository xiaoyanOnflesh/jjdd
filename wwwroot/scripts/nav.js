// -------有cookie的时候
var petname = $.cookie('petname');
console.log(petname);
if (petname) {
    // 设置显示用户名
    $('.nihao').text('欢迎你,' + petname).css({ 'color': 'blue', 'cursor': 'pointer' });
    // 点击显示修改头像和退出 
    $('.red_text,.tuichu').text('退出登录').css({ 'color': 'red', 'cursor': 'pointer' })
    $('.touxiang').attr('src', './img/u=316378754,667641855&fm=27&gp=0.jpg')
    $('.red_text,.tuichu').on('click', function () {
        // 退出登录 
        $.get('/api/v1/user/shanchu', (data) => {
            // 退出成功,刷新首页
            if (data.code == 'success') {
                alert(data.message);
                location.href = '/'
            }
        })
    })
}

// -------------
$('#mydingdan').hover(function () {
    $('.myJD').show();
}, function () {
    $('.myJD').hide();
})

$('#myserver').hover(function () {
    $('.myserver').show();
}, function () {
    $('.myserver').hide();
})

$('#daohan').hover(function () {
    $('.daohan_parname').show();
}, function () {
    $('.daohan_parname').hide();
})

// ----------地图渲染------------------
$.get('/adress', (data) => {
    // console.log(data);
    var html = ''
    data.forEach(function (ele) {
        html += `
             <span>${ele.li}</span>
        `
    });
    $('.adress').html(html);

    $('#adress').hover(function () {
        $('.adress').addClass('adress_show');
        show()
    }, function () {
        $('.adress').removeClass('adress_show');
    })

    $('.adress span').hover(function () {
        $('.adress span').css({
            color: 'gray',
            'background-color': 'white'
        });
        $(this).css({
            color: 'white',
            'background-color': 'red'
        }).click(function () {
            $('.text_bian').text($(this).text())
            $('.adress').removeClass('adress_show');
        })
    })

    function show() {
        $('.adress span').each(function () {
            if ($(this).text() == $('.text_bian').text()) {
                $('.adress span').css({
                    color: 'gray',
                    'background-color': 'white'
                });
                $(this).css({
                    color: 'white',
                    'background-color': 'red'
                })
            }
        })
    }
})


//----------网站导航渲染
var xuanran = `
    {{each daohan ele index}}
     <div>
            <ul>
            {{each ele obj index}}
             <a href=""><li>{{obj.text}}</li><a>
             {{/each}}
            </ul>
     </div>
     {{/each}}
     `
$.get('/wanzhandaohan', (data) => {
    // console.log(data);
    var strHtml = template.render(xuanran, { daohan: data });
    $('.daohan').html(strHtml);

})