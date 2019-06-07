$(document).ready(function () {
    $('.header-btn-menu').click(function(){
        $(this).toggleClass('btn-active');
        $('.header-menu').addClass('active');
        bodyFreezeScroll();
        if (!$(this).hasClass('btn-active')) {
            $('.header-menu').removeClass('active');
            bodyUnfreezeScroll();
        }
    });
    var $body = $(window.document.body);
    function bodyFreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('overflow', 'hidden');
        $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth));
        $body.css('position', 'fixed');
    }

    function bodyUnfreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('marginRight', '0');
        $body.css('overflow', 'auto');
        $body.css('position', 'relative');
    }
});





