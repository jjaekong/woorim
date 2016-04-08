(function($) {
    
    $('body').scrollspy({ target: '.scrollspy' });
    
    /*
    $(window).on('resize', function(event) {
        //$(this).scrollspy('refresh');
        //$(this).scrollspy({ target: "#indicator, #gnb" });
        $('.scrollspy:eq(1)').find('.active > a').trigger('click');
    });
    */
    
    // GNB, 인디케이터 클릭
    $(document).on('click', '#indicator > .nav > li > a, #gnb > .nav > li > a', function(e) {
        e.preventDefault();
        var hash = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(hash).offset().top
        }, 500, 'swing');
    });
    
    // 로고 클릭
    $(document).on('click', '#nav .logo > a', function(e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500, 'swing');
    });
    
    // 마우스휠 반응
    /*
    $(window).on('mousewheel', function(event) {
        if (event.deltaY === -1) {
            $('#indicator').find('.active').next().find('a').trigger('click');
        }
        if (event.deltaY === 1) {
            $('#indicator').find('.active').prev().find('a').trigger('click');
        }
    });
    */
    
    // 네비게이션 fixed
    $(window).on('scroll', function(event) {
        // console.log( $(this).scrollTop(), $('body').height() );
        if ( $(this).scrollTop() < $('body').height() ) {
            $('body').removeClass('nav-fixed');
        } else {
            $('body').addClass('nav-fixed');
        }
    });
    
})(jQuery);