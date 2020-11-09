/*---------------------------------
[Master Javascript]

Project: Golf Html Template
-------------------------------------------------------------------*/
(function($) {
    "use strict";
    var golf = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-------------- Golf  Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.RTL();
            this.Menu();
            this.Banner();
            this.Team();
            this.Gallery();
			this.Testimonial();


        },
        /*-------------- Museum Functions definition ---------------------------------------------------
        ---------------------------------------------------------------------------------------------------*/
        RTL: function() {
            // On Right-to-left(RTL) add class 
            var rtl_attr = $("html").attr('dir');
            if (rtl_attr) {
                $('html').find('body').addClass("rtl");
            }
        },
        //Menu
        Menu: function() {
            $("#menu-toggle").on('click', function() {
                $('.gf_header').toggleClass('open_menu');
            });
			// $(".gf_menu_close").on('click', function() {
                // $(".gf_menu_wrapper").removeClass("open_menu");
            // });

        },
        //Banner
        Banner: function() {
			 if ($('#gf_slider').length > 0) {
			$('#gf_slider').nivoSlider({				
				manualAdvance:false,
				pauseTime: 4000,
			});
			}
        },
        //Team Slider
        Team: function() {
            $('.gf_team_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: false,
                autoplaySpeed: 1500,
                autoplay: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1000: {
                        items: 3
                    }
                }
            })

        },

        //Gallery
        Gallery: function() {
            $('.gf_gallery_wrapper').magnificPopup({
                delegate: 'a',
                type: 'image',
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true,
                },
                zoom: {
                    enabled: true,
                    duration: 400,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        return openerElement.is('a') ? openerElement : openerElement.find('img');
                    }
                },

            });

        },
		//Testimonial Slider
        Testimonial: function() {
            $('.gf_test_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 35,
                nav: false,
                dots: true,
                autoplaySpeed: 1500,
                autoplay: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            })

        },

    };

    $(document).ready(function() {
        golf.init();

    });

    //On load window
    $(window).on('load', function() {
        var load;
        setTimeout(function() {
            $('body').addClass('load');
        }, 500);


    });


    //On scroll fixed menu
    $(window).scroll(function() {
        var wh = window.innerWidth;
            var h = window.innerHeight;
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 100) {
                $('.gf_header').addClass('gf_fixed');
            } else {
                $('.gf_header').removeClass('gf_fixed');
            }    

    });

    $(".dn_go_to").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false
    });




})(jQuery);