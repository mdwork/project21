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

    $(".btn-toggle").on('click', function(){
        $(this).parent().parent().find('.tbl-toggle').slideToggle();
    });

    /*menu position*/
    $(document).scroll(function(){
        var menuWrap = $('.wrap-menu-js'), //���� ����������� ����
            menuWrapHeight = menuWrap.height(), //������ ����� ����������� ����
            menu = $('.wrap-menu-js .scroll-menu'), ////������������� ����
            menuHeight = menu.height(), //������ �������������� ����
            posMenu = menuWrap.offset().top, //������� ����� �������� � ���������
            curPosDocument = $(document).scrollTop(); //������� ������� ������

        if(curPosDocument < posMenu + 40) {
            menu.css({'top': 40 + 'px', 'bottom':'auto'});
        }
        else if(curPosDocument > posMenu) {
            if (curPosDocument >  menuWrapHeight + posMenu - menuHeight - 85) {
                menu.css({'top':'auto', 'bottom': 45 + 'px'});
            }

            else {
                menu.css({'top': curPosDocument - posMenu, 'bottom':'auto'});
            }
        }
    });
});