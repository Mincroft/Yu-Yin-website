// Example of JavaScript for dynamic effects
$(document).ready(function() {
    $('nav ul li a').on('click', function() {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        return false;
    });
});

