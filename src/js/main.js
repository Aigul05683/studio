$(document).ready(function () {
    var owl = $('#review');
    owl.owlCarousel({
        loop: true,
        center: true,
        responsive:{
            0 : {
                items: 1
            },
            768 : {
                items: 2
            },
            992 : {
                items: 3
            }
        }

    });
    // Go to the next item
    $('.customNext').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


    var owl2 = $('#thematic');
    owl2.owlCarousel({
        items: 1, 
        nav: true,
        dots: false

    });
    // // Go to the next item
    // $('.customNextBtn').click(function () {
    //     owl2.trigger('next.owl.carousel');
    // })
    // // Go to the previous item
    // $('.customPrevBtn').click(function () {
    //     // With optional speed parameter
    //     // Parameters has to be in square bracket '[]'
    //     owl2.trigger('prev.owl.carousel', [300]);
    // })
    

    $('.mininav').on('click', function(){
        $('.mininav').toggleClass('mininav_active')
        $('.header-nav').toggleClass('header-nav_active')
    })
});

