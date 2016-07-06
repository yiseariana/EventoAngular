var f1 = function () {
    var fulls = $('.header');
    var win = $(window);
    fulls.height(win.height());

    console.log(win.height());
};
$(window).bind('resize', f1);

