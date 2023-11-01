$(document).ready(function() {
    $('#carouselMainBanner').owlCarousel({
        items: 1,
        loop:true, 
        margin:0,
        nav:true, 
        dots: true,
        autoplay:false,
        smartSpeed:500, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        slideBy: 1
    });
   
    $('.owl-carousel-partners').owlCarousel({
        items: 4,
        loop:true, 
        margin:30,
        nav:false, 
        dots: true,
        autoplay:false,
        smartSpeed:500, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        slideBy: 1,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    
    $('.carousel-products').owlCarousel({
        items: 1,
        loop:true, 
        margin:30,
        nav:true, 
        dots: true,
        autoplay:false,
        smartSpeed:500, //Время движения слайда
        autoplayTimeout:4000, //Время смены слайда
        slideBy: 1,
        navText:['<span><i class="fas fa-chevron-left"></i></span>', '<span><i class="fas fa-chevron-right"></i></span>']
    });
});