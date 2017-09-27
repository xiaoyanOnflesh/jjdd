$('.rightfixed_top div,.rightfixed_bottom div').hover(function () {
        $(this).children().eq(0).css('background-color', '#C81623');
        $(this).children().eq(1).stop().animate({
            right: '0px',
        })
    }, function () {
        $(this).children().eq(0).css('background-color', '#7A6E6E');
        $(this).children().eq(1).stop().animate({
            right: '-100px'
        })
    })