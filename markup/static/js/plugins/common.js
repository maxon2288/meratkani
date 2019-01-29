$(document).ready(function(){
    $("input[name='phone']").mask("+7(999)-999-99-99");
    $('.form').validate({
        rules: {
            mail: {
                required: true,
                email: true,
            },
            sur: {
                required: true,
            },
            name: {
                required: true,
            },
            father: {
                required: true,
            },
            phone: {
                required: true,
            },
            url: {
                required: true,
            },
            req: {
                required: true,            
            },
            text: {
                required: false,
            },
        },
    
        errorPlacement: function (error, element) {},
    
        submitHandler: function() {
            $("input, textarea").val('');
            $(".modal.modal-feedback, .overlay").addClass('visible');                
            setTimeout (function(){
                $(".modal.modal-feedback, .overlay").removeClass('visible');
            }, 5000);
        },
    });
    $('.recovery').validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            phone: {
                required: true,

            },
        },
    
        errorPlacement: function (error, element) {},
    
        submitHandler: function() {
            $("input, textarea").val('');
        },
    });
    $('.search').each(function() {
        var it = $(this);
        it.validate({
            rules: {
                search: {
                    required: true,
                },
            },
        
            errorPlacement: function (error, element) {},
        
            submitHandler: function() {

            },
        });
    });
    $('.callback').each(function() {
        var it = $(this);
        it.validate({

            rules: {
                mail: {
                    required: true,
                    email: true,
                },
                sur: {
                    required: true,
                },
                name: {
                    required: true,
                },
                father: {
                    required: true,
                },
                textarea: {
                    required: true,
                    minlength: 14,
                    maxlength: 1000
                },
                phone: {
                    required: true,
                },
                url: {
                    required: true,
                },
                req: {
                    required: true,            
                },
                },
        
            errorPlacement: function (error, element) {},
        
            submitHandler: function() {
                $("input, textarea").val('');
                $(".modal.modal-feedback, .overlay").addClass('visible');                
                setTimeout (function(){
                    $(".modal.modal-feedback, .overlay").removeClass('visible');
                }, 5000);

            },
        });
    })
    
    $('.form-reg').validate({
        rules: {
            mail: {
                required: false,
                email: true,
            },
            sur: {
                required: false,
            },
            name: {
                required: false,
            },
            father: {
                required: false,
            },
            phone: {
                required: false,
            },
            url: {
                required: false,
            },
            req: {
                required: false,            
            },
            name_company: {
                required: false,
            },
            iin_company: {
                required: false,
            },
            url_company: {
                required: false,
            },
            text: {
                required: false,
            },
        },
    
        errorPlacement: function (error, element) {},
    
        // submitHandler: function() {
        //     var form_data = $(this).serialize(); //собераем все данные из формы
        //     $('input, textarea').val('');
        //     $.ajax({
        //         // type: "POST", //Метод отправки
        //         // url: '/mail.php', //путь до php фаила отправителя
        //         data: form_data,
        //         // cache: false,
        //         // processData: false,
        //         // contentType: false,
        //         success: function() {
        //             location.href = "thanx.html";
        //         }
        //     });
        // },
    });
    
    $(".filter-submit").click(function() {
        // $.ajax({

        //     success: function() {
        //         // location.reload;
        //     }
        // });
    });
    
    $('.form-sign').validate({
        rules: {
            mail: {
                required: true,
                email: true,
            },
            sur: {
                required: true,
            },
            name: {
                required: true,
            },
            father: {
                required: true,
            },
            phone: {
                required: true,
            },
            url: {
                required: true,
            },
            req: {
                required: true,            
            },
            text: {
                required: false,
            },
        },
    
        errorPlacement: function (error, element) {},
        
        // submitHandler: function() {
        //     var form_data = $(this).serialize(); //собераем все данные из формы
        //     $('input, textarea').val('');
        //     $.ajax({
        //         // type: "POST", //Метод отправки
        //         // url: '/mail.php', //путь до php фаила отправителя
        //         data: form_data,
        //         // cache: false,
        //         // processData: false,
        //         // contentType: false,
        //         success: function() {
        //             location.reload
        //         }
        //     });
        // },
    });
    
    // var canvas = document.getElementById("myCanvas");
    // var ctx = canvas.getContext('2d');
    // ctx.font = "50px arial";
    // var gradient = ctx.createLinearGradient(0, 0, 250, 200);
    // gradient.addColorStop(1, "#f7a0c9");
    // gradient.addColorStop(0.6, "#9079e0");
    // gradient.addColorStop(0, "#9079e0");
    // ctx.fillStyle = gradient;
    // ctx.fillText("спасибо за регистрацию", 0, 100);
    
    
    $(".overlay").click(function() {
        $(".popup, .overlay, .filter").removeClass("visible");
    });

    $('.goods__item-noreg').click(function(e) {
        e.preventDefault();
        $('.popup, .overlay').addClass('visible');
        var url = $(this).data('url');
        $('.popup .reg-block__button').attr("data-url", url);
        var url1 = $(".reg-block__button").data('url');
        $('.reg-block__button').click(function (e) {
            e.preventDefault();
            location.href = url1;

        });
    }); 
    
    
    var mySwiper = new Swiper('.main-slider', {
        speed: 1200,
        spaceBetween: 100,
        parallax: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    
        grabCursor: true,
    
    });
    
    var mySwiper = new Swiper('.filter__slider', {
        speed: 1200,
        spaceBetween: 100,
        parallax: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    
        grabCursor: true,
    });
    
    var galleryThumbs = new Swiper('.swiper-container-thumbs', {
        grabCursor: true,
        spaceBetween: 24,
        slidesPerView: 3,
      });
      var galleryTop = new Swiper('.swiper-container-top', {
        spaceBetween: 20,
        grabCursor: true,
        thumbs: {
          swiper: galleryThumbs,
        },
      });
    
    $(window).scroll(function () {
        var topH = $(".first").innerHeight();
        var htopH = $(".header__top").innerHeight();
        var topS = topH + htopH;
    
        var s = $(window).scrollTop();
    
        if (s >= topS) {
            $(".header__menu").addClass('fixed');
        } else {
            $(".header__menu").removeClass('fixed');
    
        }
    });
    
    // $('.yur').click(function() {
    //     if ($(this).is(':checked')) {
    //         $(".more-input").addClass("visible");
    //     } else {
    //         $(".more-input").removeClass("visible");
    //         $(".more-input input").val("");
    //     }
    // });
    
    
    $( ".payment-tabs" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },    
    });

    $(".check").change(function() {
        var private = $(this).attr("value");
        var privateContent = $(".private-content").data("open");
        if (privateContent == private) {
            $(".private-content").addClass("visible");
            $(".private-content input").addClass("r-field");
        } else {
            $(".private-content").removeClass("visible")
            $(".private-content input").removeClass("r-field");
        }

        var legal = $(this).attr("value");
        var legalContent = $(".legal-content").data("open");
        if (legalContent == legal) {
            $(".legal-content").addClass("visible")
            $(".legal-content .m-fields").addClass("r-field");
        } else { 
            $(".legal-content").removeClass("visible")
            $(".legal-content .m-fields").removeClass("r-field");

        }


        rfield();

        if(getFillInput())
        {
            $(".edit-form-submit").prop("disabled", false);   
        }
        else {
            $(".edit-form-submit").prop("disabled", true);    
        }
    });
    
    $(".lightgallery").lightGallery();
        
    $(".tabs__delete").click(function() {
        var it = $(this);
        var trId = it.closest("tr").data("id");
        $('.modal-tr').addClass("visible");
        $('.modal-tr').attr("data-id", trId);
    });

    $('.modal-ok').click(function() {
        $.ajax({
            success: function() {   
            }
        });
    });
    $(".modal-ne-ok").click(function (e) {
        e.preventDefault();
        $(".modal").removeClass('visible');
    });

    $(".recovery__block").click(function() {
    
    })
    $(".recovery__block-1").click(function() {
        var it = $(this);
        $('.r-field').prop("disabled", true);
        $('.' + it.val()).prop("disabled", false);
        $(".r-field").removeClass('valid');
        $(".r-field").removeClass('error');
        $(".r-field").val('');

    })
    
    var mySwiper = new Swiper('.deliv-slider', {
        speed: 500,
        spaceBetween: 10,
        slidesPerView:  4,
        grabCursor: true,
    });
    
    var mySwiper = new Swiper('.menu-slider', {
        speed: 500,
        spaceBetween: 15,
        slidesPerView:  "auto",
    
        grabCursor: true,
    
        navigation: {
            nextEl: '.menu-slider-next',
            prevEl: '.menu-slider-prev',
        },
    
    });
    
    
    if ($(window).width() <= 1024) {
        $(function() {
            var el = $('.parralax-1');
            $(window).on('scroll', function () {
                var scroll = $(document).scrollTop();
                el.css({
                    'background-position':'50% '+(1*scroll)+'px'
                });
            });
        });
        
        $(function() {
            var el = $('.parralax-2');
            $(window).on('scroll', function () {
                var scroll = $(document).scrollTop();
                el.css({
                    'background-position':'50% '+(1*scroll)+'px'
                });
            });
        });
        
        $(function() {
            var el = $('.parralax-3');
            $(window).on('scroll', function () {
                var scroll = $(document).scrollTop();
                el.css({
                    'background-position':'50% '+(1*scroll)+'px'
                });
            });
        });
    } else if($(window).width() >= 1024) {
        $(function() {
            var el = $('.parralax-1');
            $(window).on('scroll', function () {
                var scroll = $(document).scrollTop();
                el.css({
                    'background-position':'50% '+(.5*scroll)+'px'
                });
            });
        });
        
        $(function() {
             el = $('.parralax-2');
            $(window).on('scroll', function () {
                var scroll = $(document).scrollTop();
                el.css({
                    'background-position':'50% '+(.3*scroll)+'px'
                });
            });
        });
        
        $(function() {
            var el = $('.parralax-3');
            $(window).on('scroll', function () {
                var scroll = $(document).scrollTop();
                el.css({
                    'background-position':'50% '+(.7*scroll)+'px'
                });
            });
        });
    }
    
    $(".messages__item svg").click(function() {
        $(this).parent(".messages__item").addClass('invisible')
    });

    $('.filter__select select').change(function(){
        var it = $(this);
        $.ajax({
            success: function() {
                var val = it.val();
            }
        });
    });
    
    
    $(document).ready(function() {
        $('.form-select').niceSelect();
    });
    
    $('.m-img-cont').each(function(){
        var imgCont = $(this).find('img').attr('src');
        $(this).css('background-image','url('+imgCont+')');
    });
    
    $( ".tabs" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
    });
    
    $( ".tabs-ord" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
    });
    
    $( ".main-tabs" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
    });
    
    $( ".tabs-room" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
    });
    
    $( ".tabs-tabs" ).tabs({
        hide: { effect: "fade", duration: 150 },
        show: { effect: "fade", duration: 150 },
    });
    
    new WOW().init();

    $(document).ready(function() {
        var minVal = $('.input-ot').data('min');
        var maxVal = $('.input-do').data('max');
        $("#flat-slider").slider({
            min: minVal,
            max: maxVal,
            range: true,
            values: [minVal , maxVal],
            slide: function( event, ui ) {
                $( ".filter__price-result" ).text('Цена: ' + ui.values[ 0 ] +' руб. ' +  " - " + ui.values[ 1 ] + ' руб.' );
                $(".input-ot").val(ui.values[ 0 ]);
                $(".input-do").val(ui.values[ 1 ]);
            },
            create: function(event, ui) {
                $( ".filter__price-result" ).text( 'Цена: ' + minVal+ ' руб. ' + " - "  + maxVal  + ' руб.');
            }
        });
    
    });
    var scr = screen.width;
    
    if ($(".header__menu-link").length > 8) {
    } else {
        $(".header__menu-toggle, .menu-open").css("display", "flex")
    }
    
    $(".humburger-open").click(function() {
        $(".header__menu-all").toggleClass('visible');
    });

    if($(window).width() <= 768) {
        var html = $(".sign-container-1").html();
        $(html).appendTo('.sign-container');
        $(html).remove();   
        var htmla = $(".header-mobile-container").html();
        $(htmla).appendTo('.header-mobile-container-1');
        $(html).remove();
        $(".search input").wrap("<div class='search-field'></div>");
        var htmlb = $(".search-desctop-container").html();
        $(htmlb).appendTo('.search_mobile__container');
        $('.search').each(function() {
            var it = $(this);
            it.validate({
                rules: {
                    search: {
                        required: true,
                    },
                },
            
                errorPlacement: function (error, element) {},
            
                submitHandler: function() {
                },
            });
        });
    }

    $(".seacrh-open").click(function() {
        $(".seacrh-mobile").toggleClass("visible");
    });
    
    $(".filter__open").click(function() {   
        $(".filter, .overlay").addClass("visible")
    });
        
    
    $('.news-col__archive-items .form__checkbox input').click(function(){
        if ($(this).is(':checked')){
            var month = $(this).attr('data-month');
            var year = $(this).attr('data-year');
            var s = $('.form-archive').serialize();
            var data = {
                'action'  : 'loadmore',
                'month'   : month,
                'year'    : year,
            };
            $.ajax({
                url: ajaxurl, // обработчик
                data: data, // данные
                type: 'POST', // тип запроса
                success: function(data){
                }
            });
        }   
    });
    $(".basket-index").html('0');

    $('.drop').innerWidth($(".header__menu-all").innerWidth());

    $('.filter__item-button').click(function(event){
        event.preventDefault();
        
        // $.ajax({
        //     // url: ajaxurl, // обработчик
        //     // data: data, // данные
        //     // type: 'POST', // тип запроса
        //     success: function(data){
        //         var val = parseInt($(".basket-index").html());
        //         val++;
        //         $(".basket-index").html(val);
        //     }
        // });
    });



    var countinput = 0;
    $(".edit-form-submit").prop("disabled", true);   
    $(".tkKit-input").click(function() {
        if($(this).val() == "tkKit") {
            $(".tkKit").addClass("visible");
            $(".tkKit").find(".m-field").addClass("r-field");
            
        }
        $(".edit-form-submit").prop("disabled", true);
        rfield();
    })
    rfield();

    function rfield()
    {
        $(".r-field, .reg-check").each(function() {
            var it = $(this);

            it.change(function() {
                if(getFillInput() && $(".reg-check").is(":checked"))
                {
                    $(".edit-form-submit").prop("disabled", false);   
                }
                else {
                    $(".edit-form-submit").prop("disabled", true);    
                }
            }); 
        })
        $(".r-field").each(function() {
            var it = $(this);

            it.change(function() {
                if(getFillInput())
                {
                    $(".edit-form-submit").prop("disabled", false);   
                }
                else {
                    $(".edit-form-submit").prop("disabled", true);    
                }
            }); 
        })
        // if($(".reg-check").is(":checked")){
        //     $(".edit-form-submit").prop("disabled", false);

        // } else {
        //     $(".edit-form-submit").prop("disabled", true);
        // }
    }
    $(".reg-check").click(function() {
        rfield();
    })
    
    // for (var i = 0; i < project_images.length; i++) {
    //     result.append(`<input type="hidden" name="projects[][photos]["${i}"] value="${ project_images[i]['photo_id'] }" >`);
    // }

    function getFillInput()
    {
        var fillable = 0;
        countinput = 0;
        //console.log(countinput);
        $(".r-field").each(function() {
            countinput++;
            if($(this).val().length >= 3) {
                fillable++;
            }
        });  
        
        
        return fillable == countinput;
    }

    
    
    $(function () {
        $(".callDrop").mouseenter(function (event) {
            event.preventDefault();
            var popup = $(this).attr('data-block');
            // $('body').css('overflow', 'hidden');
            // $('.overlay').addClass('visible');
            $('.' + popup).toggleClass('visible');
        });
        $(".callDrop").mouseleave(function (event) {
            event.preventDefault();
            var popup = $(this).attr('data-block');
            // $('body').css('overflow', 'hidden');
            // $('.overlay').addClass('visible');
            $('.' + popup).toggleClass('visible');
        });
    });
    $(".call-link").click(function () {
        var it = $(this);
        var itClick = it.data('href');
        location.href = itClick;
    });

    ///--------------------
    /// Калькулятор корзины
    ///--------------------

    $('.quantity').each(function () {
        var it = $(this);
        product();
        calculate();
        it.find('input').change(function(){
            var max = parseFloat($(this).attr('max'));
            var min = parseFloat($(this).attr('min'));
            var value = parseFloat($(this).val());
            if(value >= max) {
                $(this).val(max.toFixed(1));
            }
            if(value <= min) {
                $(this).val(min.toFixed(1))
            }
    
            calculate();
            product();
    
        });
        it.find('.quantity-up').click(function(){
            var max = parseFloat(it.find('input').attr('max'));
            var min = parseFloat(it.find('input').attr('min'));
            var step = parseFloat(it.find('input').attr('step'))
            var value = parseFloat(it.find('input').val())
    
            value = parseFloat(value + step).toFixed(1);
            if(value >= max) {
                it.find('input').val(max);
            } else if(value <= min) {
                it.find('input').val(min)
            } else {
                it.find('input').val(value);
            }
            calculate();
            product();
        })
        it.find('.quantity-down').click(function(){
            var max = parseFloat(it.find('input').attr('max'))
            var min = parseFloat(it.find('input').attr('min'))
            var step = parseFloat(it.find('input').attr('step'))
            var value = parseFloat(it.find('input').val())
    
            value = parseFloat(value - step).toFixed(1);
            if(value >= max) {
                it.find('input').val(max);
            } else if(value <= min) {
                it.find('input').val(min)
            } else {
                it.find('input').val(value);
            }
            calculate();
            product();
        })
        function calculate() {
            var price = parseFloat(it.find('input').closest('tr').data('price'))
            var value = parseFloat(it.find('input').val())
            it.closest('tr').find('.tabs__percent-30').html(parseFloat(price*value/100*30).toFixed(0) + ' руб.')
            it.closest('tr').find('.tabs__percent-70').html(parseFloat(price*value/100*70).toFixed(0) + ' руб.')
            it.closest('tr').find('.tabs__percent-100').html(parseFloat(price*value).toFixed(0) + ' руб.')
            it.closest('table').find('.tabs__bottom-title span').html(parseFloat(price*value ).toFixed(0) + ' руб.')

            it.closest('table').find('.tabs__result .tabs__percent-30').html(parseFloat(price*value/100*30).toFixed(0) + ' руб.')
            it.closest('table').find('.tabs__result .tabs__percent-70').html(parseFloat(price*value/100*70).toFixed(0) + ' руб.')
            it.closest('table').find('.tabs__result .tabs__percent-100').html(parseFloat(price*value/100*100).toFixed(0) + ' руб.')
        }
        function product() {
            var kg = parseFloat($(".price-kg").html()).toFixed();
            var i = parseFloat($(".price-i").val()).toFixed();
            $(".price-result").text(kg * i + " руб.");
        }
    })

    $('.printButton').click(function() {
        window.print()
    });
});
