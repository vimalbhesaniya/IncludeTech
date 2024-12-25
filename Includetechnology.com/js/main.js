(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('.dots-container').length > 0) {
                $('.dots-container').addClass('d-none');
            }
        }, 700);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 4
            },
            768: {
                items: 6
            },
            992: {
                items: 8
            }
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        const navLinks = document.querySelectorAll(".nav-item.nav-link");
    
        const currentPath = window.location.pathname.split("/").pop();
    
        navLinks.forEach(link => {
            const linkPath = link.getAttribute("href");
    
            link.classList.remove("active");
    
            if (linkPath === currentPath) {
                link.classList.add("active");
            }
        });
    });

})(jQuery);


$(".box") .click (function () {
    $ (".box") .removeClass ("active1");
    $ (this) .addClass ("active1");
});





function handleOpen(openId) {
  document.querySelectorAll(".isOpen").forEach((e) => {
    e.style.display = "none";
  });
  document.querySelectorAll(".activeTab").forEach((e) => {
    e.style.color = "black";
  });
  document.querySelectorAll(".activePost").forEach((e) => {
    e.classList.remove("hidePost");
  });
  document.querySelectorAll(".isOpen").item(openId).style.display = "block";
  document.querySelectorAll(`.activeTab`).item(openId).style.color = "#0582ae";
  document
    .querySelectorAll(`.activePost`)
    .item(openId)
    .classList.add("hidePost");
}

handleOpen(0);