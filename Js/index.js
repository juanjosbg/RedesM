// alert('pagina linkeada');

// btn.js
$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $("#btn-up").fadeIn();
        } else {
            $("#btn-up").fadeOut();
        }
    });
});