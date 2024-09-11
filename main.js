$(document).ready(function () {

    $('.hidden').each(function () {
        const element = $(this);
        element.waypoint(function (direction) {
            if (direction === 'up') {
                element.fadeTo(500, 1);
                console.log(`Elemento entrando al viewport (Fade In):`, element);
            }
        }, {
            offset: '20%'
        });
        element.waypoint(function (direction) {
            if (direction === 'down') {
                element.fadeTo(500, 0);
                console.log(`Elemento saliendo del viewport (Fade Out):`, element);
            }
        }, {
            offset: '15%'
        });
    });
    var scrollTriggerPosition = 400;

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > scrollTriggerPosition) {
            $('.card-desc-left').css('left', '0');
            $('.card-desc-right').css('right', '0');
        } else {
            $('.card-desc-left').css('left', '-100%')
            $('.card-desc-right').css('right', '-100%')
        }
    });

});