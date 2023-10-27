$(function(){
    ///// 1 /////

    $('.nav-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    ///// 2 /////

    $('.home').click(function(){
        $('header').fadeIn(1500)
        $('header').css({display: 'block'})
        $('.firstnav').removeClass('active')
        $('#about').css({display: 'none'})
        $('#resume').css({display: 'none'})
        $('#services').css({display: 'none'})
        $('#portfolio').css({display: 'none'})
        $('#contact').css({display: 'none'})
    })

    $('.about').click(function(){
        $('#about').fadeIn(1300)
        $('#about').css({
            display: 'block'
        }).siblings().css({
            display: 'none'
        })
        $('header').css({
            display: 'none'
        })
        $('.firstnav').addClass('active')

    })
    $('.resume').click(function(){
        $('#resume').fadeIn(1300)
        $('#resume').css({
            display: 'block'
        }).siblings().css({
            display: 'none'
        })
        $('header').css({
            display: 'none'
        })
        $('.firstnav').addClass('active')
    })
    $('.contact').click(function(){
        $('#contact').fadeIn(1300)
        $('#contact').css({
            display: 'block'
        }).siblings().css({
            display: 'none'
        })
        $('header').css({
            display: 'none'
        })
        $('.firstnav').addClass('active')
    })
    $('.services').click(function(){
        $('#services').fadeIn(1300)
        $('#services').css({
            display: 'block'
        }).siblings().css({
            display: 'none'
        })
        $('header').css({
            display: 'none'
        })
        $('.firstnav').addClass('active')
    })
    $('.portfolio').click(function(){
        $('#portfolio').fadeIn(1300)
        $('#portfolio').css({
            display: 'block'
        }).siblings().css({
            display: 'none'
        })
        $('header').css({
            display: 'none'
        })
        $('.firstnav').addClass('active')
    })

    ///// 3 /////

    $({ Counter: 0 }).animate({ Counter: 232 }, {
        duration: 1000,
        easing: 'linear',

        step: function() {
            $('#p232').text(Math.ceil(this.Counter));
        }
    });

    $({ Counter: 0 }).animate({ Counter: 521 }, {
        duration: 1000,
        easing: 'linear',

        step: function() {
            $('#p521').text(Math.ceil(this.Counter));
        }
    });

    $({ Counter: 0 }).animate({ Counter: 1461}, {
        duration: 1000,
        easing: 'linear',

        step: function() {
            $('#p1461').text(Math.ceil(this.Counter));
        }
    });

    $({ Counter: 0 }).animate({ Counter: 24 }, {
        duration: 1000,
        easing: 'linear',

        step: function() {
            $('#p24').text(Math.ceil(this.Counter));
        }
    });

    ///// 4 /////

    let btn = $('#backtotop');
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            btn.show();
        } else {
            btn.hide();
        }
    });
    btn.click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });

    ///// 5 /////

    $('.servicescol1').on({
        mouseover: function() {
            $('.servicescol1').css({
                backgroundColor: 'rgb(31, 150, 78)',
                transition: '0.5s all',
            })
            $('.services-icon1').css({
                transition: '0.5s all',
                backgroundColor: 'rgba(207, 207, 207, 1)'
            })
            $('.bxl-dribbble').css({
                transition: '0.5s all',
                color: 'rgb(31, 150, 78)'
            })
        },
        mouseout: function() {
            $(this).css({
                backgroundColor: 'rgba(204, 204, 204, 0.1)',
                transition: '0.5s all',
            })
            $('.services-icon1').css({
                transition: '0.5s all',
                backgroundColor: 'rgb(31, 150, 78)'
            })
            $('.bxl-dribbble').css({
                transition: '0.5s all',
                color: 'white'
            })
        }
    })
    $('.servicescol2').on({
        mouseover: function() {
            $(this).css({
                backgroundColor: 'rgb(31, 150, 78)',
                transition: '0.5s all',
            })
            $('.services-icon2').css({
                transition: '0.5s all',
                backgroundColor: 'rgba(207, 207, 207, 1)'
            })
            $('.bx-file-blank').css({
                transition: '0.5s all',
                color: 'rgb(31, 150, 78)'
            })
        },
        mouseout: function() {
            $(this).css({
                backgroundColor: 'rgba(204, 204, 204, 0.1)',
                transition: '0.5s all',
            })
            $('.services-icon2').css({
                transition: '0.5s all',
                backgroundColor: 'rgb(31, 150, 78)'
            })
            $('.bx-file-blank').css({
                transition: '0.5s all',
                color: 'white'
            })
        }
    })
    $('.servicescol3').on({
        mouseover: function() {
            $(this).css({
                backgroundColor: 'rgb(31, 150, 78)',
                transition: '0.5s all',
            })
            $('.services-icon3').css({
                transition: '0.5s all',
                backgroundColor: 'rgba(207, 207, 207, 1)'
            })
            $('.bx-tachometer').css({
                transition: '0.5s all',
                color: 'rgb(31, 150, 78)'
            })
        },
        mouseout: function() {
            $(this).css({
                backgroundColor: 'rgba(204, 204, 204, 0.1)',
                transition: '0.5s all',
            })
            $('.services-icon3').css({
                transition: '0.5s all',
                backgroundColor: 'rgb(31, 150, 78)'
            })
            $('.bx-tachometer').css({
                transition: '0.5s all',
                color: 'white'
            })
        }
    })
    $('.servicescol4').on({
        mouseover: function() {
            $(this).css({
                backgroundColor: 'rgb(31, 150, 78)',
                transition: '0.5s all',
            })
            $('.services-icon4').css({
                transition: '0.5s all',
                backgroundColor: 'rgba(207, 207, 207, 1)'
            })
            $('.bx-world').css({
                transition: '0.5s all',
                color: 'rgb(31, 150, 78)'
            })
        },
        mouseout: function() {
            $(this).css({
                backgroundColor: 'rgba(204, 204, 204, 0.1)',
                transition: '0.5s all',
            })
            $('.services-icon4').css({
                transition: '0.5s all',
                backgroundColor: 'rgb(31, 150, 78)'
            })
            $('.bx-world').css({
                transition: '0.5s all',
                color: 'white'
            })
        }
    })
    $('.servicescol5').on({
        mouseover: function() {
            $(this).css({
                backgroundColor: 'rgb(31, 150, 78)',
                transition: '0.5s all',
            })
            $('.services-icon5').css({
                transition: '0.5s all',
                backgroundColor: 'rgba(207, 207, 207, 1)'
            })
            $('.bx-tv').css({
                transition: '0.5s all',
                color: 'rgb(31, 150, 78)'
            })
        },
        mouseout: function() {
            $(this).css({
                backgroundColor: 'rgba(204, 204, 204, 0.1)',
                transition: '0.5s all',
            })
            $('.services-icon5').css({
                transition: '0.5s all',
                backgroundColor: 'rgb(31, 150, 78)'
            })
            $('.bx-tv').css({
                transition: '0.5s all',
                color: 'white'
            })
        }
    })
    $('.servicescol6').on({
        mouseover: function() {
            $(this).css({
                backgroundColor: 'rgb(31, 150, 78)',
                transition: '0.5s all',
            })
            $('.services-icon6').css({
                transition: '0.5s all',
                backgroundColor: 'rgba(207, 207, 207, 1)'
            })
            $('.bx-arch').css({
                transition: '0.5s all',
                color: 'rgb(31, 150, 78)'
            })
        },
        mouseout: function() {
            $(this).css({
                backgroundColor: 'rgba(204, 204, 204, 0.1)',
                transition: '0.5s all',
            })
            $('.services-icon6').css({
                transition: '0.5s all',
                backgroundColor: 'rgb(31, 150, 78)'
            })
            $('.bx-arch').css({
                transition: '0.5s all',
                color: 'white'
            })
        }
    })

    ///// 6 /////

    let $allimg = $('.allimg')

    $('#app').click(function() {
        $('#app').addClass('active').siblings().removeClass('active')
        $('#app1').css({
            display: 'block'
        })
        $('#app2').css({
            display: 'block'
        })
        $('#app3').css({
            display: 'block'
        })
        $('#web1').css({
            display: 'none'
        })
        $('#web2').css({
            display: 'none'
        })
        $('#web3').css({
            display: 'none'
        })
        $('#card1').css({
            display: 'none'
        })
        $('#card2').css({
            display: 'none'
        })
        $('#card3').css({
            display: 'none'
        })
    })
    $('#card').click(function() {
        $('#card').addClass('active').siblings().removeClass('active')
        $('#app1').css({
            display: 'none'
        })
        $('#app2').css({
            display: 'none'
        })
        $('#app3').css({
            display: 'none'
        })
        $('#web1').css({
            display: 'none'
        })
        $('#web2').css({
            display: 'none'
        })
        $('#web3').css({
            display: 'none'
        })
        $('#card1').css({
            display: 'block'
        })
        $('#card2').css({
            display: 'block'
        })
        $('#card3').css({
            display: 'block'
        })
    })
    $('#web').click(function() {
        $('#web').addClass('active').siblings().removeClass('active')
        $('#app1').css({
            display: 'none'
        })
        $('#app2').css({
            display: 'none'
        })
        $('#app3').css({
            display: 'none'
        })
        $('#web1').css({
            display: 'block'
        })
        $('#web2').css({
            display: 'block'
        })
        $('#web3').css({
            display: 'block'
        })
        $('#card1').css({
            display: 'none'
        })
        $('#card2').css({
            display: 'none'
        })
        $('#card3').css({
            display: 'none'
        })
    })
    $('#all').click(function() {
        $('#all').addClass('active').siblings().removeClass('active')
        $($allimg).css({
            display: 'block'
        })
    })

       $('.portfolio-col a').on('click', function(event) {
        event.preventDefault();
        var link = $(this).find('img').attr('src');
        $('.gallery img').attr('src', '');
        $('.gallery img').attr('src', link);
        $('.gallery').fadeIn('slow');
    });
    // close 
    $('.gallery').on('click', function(event) {
        event.preventDefault();
        $('.gallery').fadeOut('slow');
    });




})




