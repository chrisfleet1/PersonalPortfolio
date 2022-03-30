$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.container-nav').css('background','hsla(229, 34%, 25%, 0.7)');
    } else {
    $('.container-nav').css('background','transparent');
    }
    });