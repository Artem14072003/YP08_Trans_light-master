   $(document).ready(function () {
        function e() {
            ($(window).scrollTop() <= 100 && $(window).width() >= "768") || ($(window).scrollTop() <= 100 && $(window).width() < "768")
                ? $(".header").css("background", "rgba(0, 91, 193, 0.6)")
                : (($(window).scrollTop() > 100 && $(window).width() < "768") || ($(window).scrollTop() > 100 && $(window).width() >= "768")) && $(".header").css("background", "rgba(0, 91, 193, 1)");
        }
            (function () {
                let e = document.querySelectorAll(".ibg");
                for (var o = 0; o < e.length; o++) e[o].querySelector("img") && (e[o].style.backgroundImage = "url(" + e[o].querySelector("img").getAttribute("src") + ")");
            })(),
            $(".header__burger").click(function (e) {
                $(".header__burger, .header__menu").toggleClass("active"), $(".header").toggleClass("bege"), $("body").toggleClass("lock");
            }),
            e(),
            $(window).scroll(function () {
                e();
            }),
            $(window).on("load resize", e),
            $(".slider").slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: !0,
                autoplay: !0,
                autoplaySpeed: 5e3,
                pauseOnHover: !0,
                dots: !1,
                arrows: !0,
                responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
            }),
            $(".rent__slider-inner").slick({ slidesToShow: 1, slidesToScroll: 1, infinite: !0, autoplaySpeed: 5e3, pauseOnHover: !0, dots: !1, arrows: !0 }),
            $(".footer__btn-Top").on("click", function (e) {
                if ("" !== this.hash) {
                    e.preventDefault();
                    var o = this.hash;
                    $("html, body").animate({ scrollTop: $(o).offset().top }, 800, function () {
                        window.location.hash = o;
                    });
                }
            });
    });
