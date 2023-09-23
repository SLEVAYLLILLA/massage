let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});



let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});

$(document).ready(function () {

    $('.buttons').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if (filter == 'all') {
            $('.image').show(400);
        } else {
            $('.image').not('.' + filter).hide(200);
            $('.image').filter('.' + filter).show(400);
        }

    });

    $('.gallery').magnificPopup({

        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }

    });

});

// $(document).ready(function){
//     $('.menuIcon').click(function(){
//         $('#carouselExampleSlidesOnly').toogle();
//     });
// };
