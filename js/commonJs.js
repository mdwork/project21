$(document).ready(function(){
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
});