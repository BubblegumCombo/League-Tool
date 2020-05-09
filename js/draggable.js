jQuery(function ($) {
    $('.drag')
        .click(function () {
            $(this).toggleClass("selected");
        })
        .drag("init", function () {
            if ($(this).is('.selected'))
                return $('.selected');
        })
        .drag(function (ev, dd) {
            $(this).css({
                top: dd.offsetY,
                left: dd.offsetX
            });
        });
});