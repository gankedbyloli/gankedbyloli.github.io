$(window).scroll(function () {
    $(".highlight").each(function () {
        if($(this).isOnScreenHighlight()) {
            $(this).css({"background-position": "-100% 0"});
        } else {
            $(this).css({"background-position": "0 0"});
        }
    });
})

$.fn.isOnScreenHighlight = function () {
    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };

    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.bottom || viewport.top > bounds.bottom));
};
