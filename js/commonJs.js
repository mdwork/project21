$(document).ready(function(){
    /*toggle sideBar for responsive*/
    $('#toggle-btn-side-bar').on('click', function(){
        var tglSdbar = $('#toggle-sidebar');

        if(!tglSdbar.hasClass('active')) {
            tglSdbar
                .addClass('active')
                .animate({
                        'margin-left': 0
                    }, 500)
        }
        else {
            tglSdbar
                .removeClass('active')
                .animate({
                    'margin-left': '-188px'
                }, 500)
        }
    });

    /*toggle section sideBar*/
    $('.side-bar h2').on('click', function(){
        if(!$(this).parent().hasClass('no-toggle')) {
            $(this).parent().find('.list-side-bar').slideToggle();
        }
    });

    $('.list-side-bar > li > a').on('click', function(e){
        e.preventDefault();

        var subMenuCheck = $(this).parent().find('.sub-menu-side-bar');

        if(subMenuCheck){
            subMenuCheck.slideToggle();
        }
    });
});