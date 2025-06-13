/*-----------------------------------------------------------------

Template Name: RevAuto - Car Dealer & Services Html Template
Author:  namespace-it
Author URI: https://themeforest.net/user/namespace-it/portfolio
Version: 1.0.0
Description: RevAuto - Car Dealer & Services Html Template<

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. header
02. animated text with swiper slider
03. magnificPopup
04. counter up
05. wow animation
06. nice select
07. swiper slider
08. search popup
09. mousecursor 
09. preloader 


------------------------------------------------------------------*/

(function ($) {
  "use strict";

  $(document).ready(function () {
    //>> Mobile Menu Js Start <<//
    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    //>> Sidebar Toggle Js Start <<//
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    //>> Body Overlay Js Start <<//
    $(".body-overlay").on("click", function () {
      $(".offcanvas__area").removeClass("offcanvas-opened");
      $(".df-search-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
    });

    //>> Sticky Header Js Start <<//

    $(window).scroll(function () {
      if ($(this).scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");

        $(".navbar-2-address-bar").addClass("display-none");
      } else {
        $("#header-sticky").removeClass("sticky");
        $(".navbar-2-address-bar").removeClass("display-none");
      }
    });

    //>> Video Popup Start <<//
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".video-popup").magnificPopup({
      type: "iframe",
      callbacks: {},
    });

    //>> Counterup Start <<//
    $(".count").counterUp({
      delay: 15,
      time: 4000,
    });

    //>> Wow Animation Start <<//
    new WOW().init();

    //>> Nice Select Start <<//
    $("#home-landing-select").niceSelect();

    const heroSlider = new Swiper(".hero-slider", {
      speed: 2500,
      spaceBetween: 30,
      loop: true,
      //slidesPerView: 1,
      autoplay: true,
      // effect: "fade",
      a11y: false,
      pagination: {
        el: ".dot",
        clickable: true,
      },
    });

    const heroSlider2 = new Swiper(".hero-slider-2", {
      speed: 1500,
      loop: true,
      //slidesPerView: 1,
      autoplay: true,
      effect: "fade",
      // breakpoints: {
      //     '1600': {
      //         slidesPerView: 1,
      //     },
      //     '1400': {
      //         slidesPerView: 1,
      //     },
      //     '1200': {
      //         slidesPerView: 1,
      //     },
      //     '992': {
      //         slidesPerView: 1,
      //     },
      //     '768': {
      //         slidesPerView: 1,
      //     },
      //     '576': {
      //         slidesPerView: 1,
      //     },
      //     '0': {
      //         slidesPerView: 1,
      //     },

      a11y: false,
      // },
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },
    });

    if ($(".hero-img-slider").length > 0) {
      const heroImgSlider = new Swiper(".hero-img-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
      });
    }

    if ($(".hero-3-slider").length > 0) {
      const hero3Slider = new Swiper(".hero-3-slider", {
        effect: "cards",
        grabCursor: true,
        speed: 2000,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
      });
    }

    // hero 4 slider
    const home4Slicer = new Swiper(".hero-4-swiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-dot",
        clickable: true,
      },
      duration: 3000,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

    $(".hero-4-thumb").click(function () {
      const slideIndex = $(this).data("slide"); // Get the slide index from the data-slide attribute
      home4Slicer.slideTo(slideIndex); // Navigate to the corresponding slide
    });

    // category 4 slider
    var categorySwiper = new Swiper(".category-4-swiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        350: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
        1380: {
          slidesPerView: 7,
          spaceBetween: 15,
        },
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      loop: true,
    });

    //>> Testimonial-slider Slider Start <<//
    if ($(".testimonial-slider").length > 0) {
      const testimonialSlider = new Swiper(".testimonial-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dots",
          clickable: true,
        },

        breakpoints: {
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".testimonial-slider-2").length > 0) {
      const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1399: {
            slidesPerView: 4,
          },
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    if ($(".testimonial-slider-3").length > 0) {
      const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1399: {
            slidesPerView: 5,
          },
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Testimonial-slider Slider Start <<//
    if ($(".team-slider").length > 0) {
      const teamSlider = new Swiper(".team-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dots",
          clickable: true,
        },

        breakpoints: {
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Brand Slider Start <<//
    if ($(".brand-slider").length > 0) {
      const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },

        breakpoints: {
          1399: {
            slidesPerView: 6,
          },
          1199: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Shop-slider Slider Start <<//
    if ($(".shop-slider").length > 0) {
      const shopSlider = new Swiper(".shop-slider", {
        spaceBetween: 24,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".dot",
          clickable: true,
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next",
        },
        breakpoints: {
          1399: {
            slidesPerView: 6,
          },
          1199: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    // client swiper
    if ($(".client-swiper").length > 0) {
      const clientSwiper = new Swiper(".client-swiper", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        breakpoints: {
          1199: {
            slidesPerView: 5,
          },
          991: {
            slidesPerView: 4,
          },
          767: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        },
      });
    }

    //>> Quantity Cart Js Start <<//
    let quantity = 0;
    let price = 0;
    $(".cart-item-quantity-amount, .product-quant").html(quantity);
    $(".total-price, .product-pri").html(price.toFixed(2));
    $(".cart-increment, .cart-incre").on("click", function () {
      if (quantity <= 4) {
        quantity++;
        $(".cart-item-quantity-amount, .product-quant").html(quantity);
        let basePrice = $(".base-price, .base-pri").text();
        $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
      }
    });

    $(".cart-decrement, .cart-decre").on("click", function () {
      if (quantity >= 1) {
        quantity--;
        $(".cart-item-quantity-amount, .product-quant").html(quantity);
        let basePrice = $(".base-price, .base-pri").text();
        $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
      }
    });

    $(".cart-item-remove>a").on("click", function () {
      $(this).closest(".cart-item").hide(300);
    });

    //>> Quantity Js Start <<//
    $(".quantity").on("click", ".plus", function (e) {
      let $input = $(this).prev("input.qty");
      let val = parseInt($input.val(), 10); // Specify base 10
      $input.val(val + 1).change();
    });

    $(".quantity").on("click", ".minus", function (e) {
      let $input = $(this).next("input.qty");
      let val = parseInt($input.val(), 10); // Specify base 10
      if (val > 0) {
        $input.val(val - 1).change();
      }
    });

    // 11.Range sliger
    function getVals() {
      let parent = this.parentNode;
      let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat(slides[0].value);
      let slide2 = parseFloat(slides[1].value);
      if (slide1 > slide2) {
        let tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
      }

      let displayElement = parent.getElementsByClassName("rangeValues")[0];
      displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
    }

    window.onload = function () {
      let sliderSections = document.getElementsByClassName("range-slider");
      for (let x = 0; x < sliderSections.length; x++) {
        let sliders = sliderSections[x].getElementsByTagName("input");
        for (let y = 0; y < sliders.length; y++) {
          if (sliders[y].type === "range") {
            sliders[y].oninput = getVals;
            sliders[y].oninput();
          }
        }
      }
    };

    progressBar: () => {
      const pline = document.querySelectorAll(".progressbar.line");
      const pcircle = document.querySelectorAll(".progressbar.semi-circle");
      pline.forEach((e) => {
        const line = new ProgressBar.Line(e, {
          strokeWidth: 6,
          trailWidth: 6,
          duration: 3000,
          easing: "easeInOut",
          text: {
            style: {
              color: "inherit",
              position: "absolute",
              right: "0",
              top: "-30px",
              padding: 0,
              margin: 0,
              transform: null,
            },
            autoStyleContainer: false,
          },
          step: (state, line) => {
            line.setText(Math.round(line.value() * 100) + " %");
          },
        });
        let value = e.getAttribute("data-value") / 100;
        new Waypoint({
          element: e,
          handler: function () {
            line.animate(value);
          },
          offset: "bottom-in-view",
        });
      });
      pcircle.forEach((e) => {
        const circle = new ProgressBar.SemiCircle(e, {
          strokeWidth: 6,
          trailWidth: 6,
          duration: 2000,
          easing: "easeInOut",
          step: (state, circle) => {
            circle.setText(Math.round(circle.value() * 100));
          },
        });
        let value = e.getAttribute("data-value") / 100;
        new Waypoint({
          element: e,
          handler: function () {
            circle.animate(value);
          },
          offset: "bottom-in-view",
        });
      });
    };

    const rangeInput = document.querySelectorAll(".range-input input"),
      priceInput = document.querySelectorAll(".price-input input"),
      range = document.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
          if (e.target.className === "input-min") {
            rangeInput[0].value = minPrice;
            range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
          } else {
            rangeInput[1].value = maxPrice;
            range.style.right =
              100 - (maxPrice / rangeInput[1].max) * 100 + "%";
          }
        }
      });
    });

    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
          range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
      });
    });

    // Homepage 3
    // New Arrival
    $(".left-section button").click(function () {
      $(this).animate({ width: "+=5px" }, 200).animate({ width: "-=5px" }, 200);

      $(".left-section button")
        .removeClass("car-section-3-active")
        .css("opacity", "1");

      $(this)
        .addClass("car-section-3-active")
        .animate({ opacity: 0.5 }, 200)
        .animate({ opacity: 1 }, 200);

      var targetId = $(this).text();

      $(".tab-pane").removeClass("show active").hide();

      $("#" + targetId)
        .addClass("show active")
        .fadeIn();
    });

    $(".right-section button").click(function () {
      $(".right-section button")
        .removeClass("car-section-3-active-right")
        .css("opacity", "1");

      $(this)
        .addClass("car-section-3-active-right")
        .animate({ opacity: 0.5 }, 200)
        .animate({ opacity: 1 }, 200);
    });

    // suggested car
    $("#suggested-car-btns-3 button").click(function () {
      $(this).animate({ width: "+=5px" }, 200).animate({ width: "-=5px" }, 200);

      $("#suggested-car-btns-3 button")
        .removeClass("car-section-3-active")
        .css("opacity", "1");

      $(this)
        .addClass("car-section-3-active")
        .animate({ opacity: 0.5 }, 200)
        .animate({ opacity: 1 }, 200);

      var suggest = $(this).data("suggest");

      $(".tab-panel-suggest")
        .removeClass("show active")
        .addClass("hide")
        .hide();

      $(".tab-panel-suggest[data-suggest='" + suggest + "']")
        .addClass("show active")
        .fadeIn();
    });

    // Cart 2
    let cart2ItemData = [];
    const cart2Items = $(".cart-item");
    const cart2ItemsTotal = $("#cart-2-items");
    const cart2ItemsSubtotal = $("#cart-2-items-subtotal");
    const cart2Total = $("#cart-2-total-price");

    cart2Items.each(function (index, item) {
      const id = $(this).data("id");
      const quantity = $(`#cart-2-quantity-${index + 1}`).val();
      const price = $(`#cart-2-price-${index + 1}`).text();
      const priceWithoutDollar = price.replace("$", "");

      cart2ItemData.push({
        id,
        quantity: Number(quantity),
        price: Number(priceWithoutDollar),
      });
    });

    function update2Cart() {
      cart2ItemsTotal.text(
        cart2ItemData.reduce((acc, item) => acc + Number(item.quantity), 0)
      );

      const quantity = cart2ItemData.reduce(
        (acc, item) => acc + Number(item.quantity) * Number(item.price),
        0
      );

      cart2ItemsSubtotal.text(quantity);
      cart2Total.text(
        cart2ItemData.reduce(
          (acc, item) => acc + Number(item.quantity) * Number(item.price),
          0
        ) + 5
      );
    }
    update2Cart();

    $(".cart-2-increase-btn").click(function () {
      const id = $(this).data("id");

      const input = $(`#cart-2-quantity-${id}`);
      let inputVal = parseInt(input.val());

      if (inputVal >= 0) {
        input.val(inputVal + 1);
        cart2ItemData[id - 1].quantity = inputVal + 1;

        update2Cart();
      }
    });

    $(".cart-2-decrease-btn").click(function () {
      const id = $(this).data("id");

      const input = $(`#cart-2-quantity-${id}`);
      let inputVal = parseInt(input.val());

      if (inputVal >= 1) {
        input.val(inputVal - 1);
        cart2ItemData[id - 1].quantity = inputVal - 1;
        update2Cart();
      }
    });

    $(".cart-2-delete-item-btn").click(function () {
      const id = $(this).data("id");

      cart2ItemData = cart2ItemData.filter((item) => item.id !== id);

      $(this).closest(`div.cart-item[data-id='${id}']`).hide(300);

      update2Cart();
    });

    // Cart 3
    let cart3ItemData = [];
    const cart3Items = $(".cart-item-3");
    const cart3ItemsTotal = $("#cart-3-items");
    const cart3ItemsSubtotal = $("#cart-3-items-subtotal");
    const cart3Total = $("#cart-3-total-price");

    function update3Cart(singleSubtotal = null) {
      cart3ItemsTotal.text(
        cart3ItemData.reduce((acc, item) => acc + Number(item.quantity), 0)
      );

      const quantity = cart3ItemData.reduce(
        (acc, item) => acc + Number(item.quantity) * Number(item.price),
        0
      );
      cart3ItemsSubtotal.text(quantity);

      cart3Total.text(
        cart3ItemData.reduce(
          (acc, item) => acc + Number(item.quantity) * Number(item.price),
          0
        ) +
          10 -
          9.99
      );

      if (singleSubtotal) {
        const singleSubtotalElement = $(
          `.cart-3-single-subtotal-${singleSubtotal}`
        );
        const singlePrice = cart3ItemData[singleSubtotal - 1];

        singleSubtotalElement.text(singlePrice.quantity * singlePrice.price);
      }
    }

    cart3Items.each(function (index, item) {
      const id = $(this).data("id");
      const quantity = $(`#cart-3-quantity-${index + 1}`).val();
      const price = $(`#cart-3-price-${index + 1}`).text();

      cart3ItemData.push({
        id,
        quantity: Number(quantity),
        price: Number(price),
      });

      update3Cart(id);
    });

    $(".cart-3-increase-btn").click(function () {
      const id = $(this).data("id");

      const input = $(`#cart-3-quantity-${id}`);
      let inputVal = parseInt(input.val());

      if (inputVal >= 0) {
        input.val(inputVal + 1);
        cart3ItemData[id - 1].quantity = inputVal + 1;

        update3Cart(id);
      }
    });

    $(".cart-3-decrease-btn").click(function () {
      const id = $(this).data("id");

      const input = $(`#cart-3-quantity-${id}`);
      let inputVal = parseInt(input.val());

      if (inputVal >= 1) {
        input.val(inputVal - 1);
        cart3ItemData[id - 1].quantity = inputVal - 1;

        update3Cart(id);
      }
    });

    $(".cart-3-delete-item-btn").click(function () {
      const id = $(this).data("id");
      cart3ItemData = cart3ItemData.filter((item) => item.id !== id);

      $(this).closest(`tr[data-id='${id}']`).hide(300);

      update3Cart();
    });

    // update cart count
    const counterBtns = $(".add-to-cart");
    const counterBtns2 = $(".add-to-cart-2");
    const cartCount = $("#cart-count");
    function updateCartCount() {
      const cartCountValue = cartCount.text();
      cartCount.text(Number(cartCountValue) + 1);
    }

    counterBtns.click(function () {
      updateCartCount();
    });

    counterBtns2.click(function () {
      updateCartCount();
    });

    //>> Back To Top Start <<//
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        $("#back-top").addClass("show");
      } else {
        $("#back-top").removeClass("show");
      }
    });
    $("#back-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
    // Back to top btn area end here ***

    //>> Mouse Cursor Start <<//
    function mousecursor() {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "a, .cursor-pointer", function () {
            ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
    $(function () {
      mousecursor();
    });
  }); // End Document Ready Function

  function loader() {
    $(window).on("load", function () {
      // Animate loader off screen
      $(".preloader").addClass("loaded");
      $(".preloader").delay(600).fadeOut();
    });
  }

  loader();
})(jQuery); // End jQuery

 const translations = {
    ro: {
      firstLanguage: "Română",
      secondLanguage: "Rusă",
      selectedLanguage: "Română",
       home: "Acasă",
       why_autolider: "De ce Autolider?",
    catalog: "Catalog",
    delivery_import: "Livrare & Import",
    payment_methods: "Modalități de plată",
    contacts: "Contacte",
     contact_info: "Informații de contact",
    address: "Strada Principală, Melbourne, Australia",
    email: "info@example.com",
    hours: "Luni–Vineri, 09:00–17:00",
    get_quote: "Cere o ofertă",
     slide1_line1: "Mașini coreene",
    slide1_line2: "livrare garantată",
    slide1_paragraph: "Transportăm automobilul tău direct din Coreea, cu garanția calității și siguranței.",
    buy_this_car: "Contactează-ne",

    slide2_line1: "Mașini din Coreea,",
    slide2_line2: "direct la tine",
    slide2_paragraph: "Importăm mașini coreene verificate, cu livrare rapidă și documentație completă.",

    slide3_line1: "Importăm mașina ta",
    slide3_line2: "din Coreea",
    slide3_paragraph: "Alege-ți mașina din Coreea și lasă restul pe seama noastră — transparent și fără griji.",
     about_us_title: "Avantajele",
    advantages_heading: "Care sunt beneficiile de a importa un automobil din Coreea de Sud față de Republica Moldova",
    advantages_intro: "Alegând să cumperi un automobil din Coreea beneficiezi de prețuri competitive, calitate înaltă și o varietate largă de modele adaptate nevoilor tale.",
    advantage_1: "Cost mai mic la achiziție: Prețurile mașinilor (în special second-hand) pot fi mai mici în Coreea de Sud decât în Republica Moldova, chiar și după adăugarea taxelor de transport și vamale.",
    advantage_2: "Echipare bogată: Modelele sud-coreene sunt adesea bine echipate chiar și în versiunile standard (navigație, încălzire în scaune, camere video, senzori etc.).",
    advantage_3: "Întreținere riguroasă: Mașinile din Coreea de Sud sunt, în general, bine întreținute, având istoricul complet al service-ului.",
    advantage_4: "Acces la istoricul mașinii: De obicei, poți verifica ușor istoricul mașinii (kilometraj, accidente, reparații etc.) prin platforme specializate.",
    advantage_5: "Mai puține falsificări: Piața sud-coreeană este mai strict reglementată comparativ cu unele practici din Moldova (unde kilometrajul falsificat e destul de des întâlnit).",
    advantage_6: "Transparenta și seriozitate în fiecare etapă a procesului de import",
    about_button: "Despre Autolider",
    call_for_help: "Sunați pentru ajutor",
    carTypeSuv: "SUV",
    fuelDiesel: "Diesel",
    transmissionAutomatic: "Automată",
    seats5: "5 persoane",
    buy_this_car: "Contactează-ne",
    carNameSantaFe: "Hyundai Santa Fe",
    carNameKiaSorento: "Kia Sorento",
    carTypeSuv: "SUV",
    fuelBenzina: "Benzină",
    transmissionAutomatic: "Automată",
    seats7: "7 persoane",
    buy_this_car: "Contactează-ne",
    transmissionManual: "Manuală",
    carTypeHybrid: "Hybrid",
    carTypeElectric: "Electric",
    fuelHybrid: "Hybrid",
    fuelElectric: "Electric",
    carNameHyundaiElantraHybrid: "Hyundai Elantra Hybrid",
    carNameHyundaiSonata: "Hyundai Sonata",
    carNameKiaK5: "Kia K5",
    carNameGenesisG70: "Genesis G70",
    carNameSamsungSM6: "Samsung SM6",

    carTypeHybrid: "Hybrid",
    carTypeSedan: "Sedan",

    fuelHybrid: "Hybrid",
    fuelBenzina: "Benzină",
    fuelDiesel: "Diesel",

    transmissionAutomatic: "Automată",
    transmissionManual: "Manuală",
      catalogText: "În Coreea nu sunt disponibile doar mărcile coreene precum Kia, Hyundai, Genesis, SsangYong, dar și mărcile nemțești precum Audi, BMW, Mercedes și restul mașinilor fabricate în Europa. Automobilele nemțești din Coreea nu diferă de cele din Europa — sunt fabricate de asemenea în Europa, iar piesele de schimb coincid cu piața europeană.",
    seats5: "5 persoane",
    ourCarsTitle: "O parte din mașinile disponibile",
    buy_this_car: "Contactează-ne",
     feature1Title: "Selecția vehiculului",
    feature1Desc: "Alege mașina dorită pe una dintre platformele menționate.",
    feature2Title: "Verificarea istoricului",
    feature2Desc: "Asigură-te că vehiculul are un istoric clar și complet.",
    feature3Title: "Organizarea transportului",
    feature3Desc: "Colaborează cu un agent de transport pentru a aduce mașina în Republica Moldova.",
    feature4Title: "Vamuirea și înmatricularea",
    feature4Desc: "Plătește taxele vamale și accizele, apoi înregistrează vehiculul conform legislației moldovenești.",
      importTitle: "Procesul de import",
       yearsExperience: "Ani de experiență",
       paymentMethodsAndCosts: "Modalități de plată și costuri",
       paymentMethods: "Metode de plată",
    costStructure: "Structura costurilor",
    purchaseSteps: "Pașii necesari pentru achiziție",
    bankTransfer: "Transfer bancar internațional",
    authorizedIntermediaries: "Plată prin intermediari autorizați",
    installmentPayment: "Plata în tranșe",
    carPrice: "Prețul automobilului",
    transportFees: "Taxe de transport și manipulare",
    customsVAT: "Taxe vamale și TVA",
    extraServices: "Servicii suplimentare",
     sparePartsTitle: "Piese de schimb și accesorii pentru automobile din Coreea",
     sparePartsTitle: "Piese de schimb și accesorii pentru automobile din Coreea",
    sparePartsDescription: "Autolider nu oferă doar automobile, ci și suport complet după livrare. Punem la dispoziție o gamă variată de piese de schimb originale și accesorii compatibile pentru majoritatea mărcilor coreene precum Hyundai, Kia, SsangYong și altele.",
    sparePartItem1: "Piese originale și aftermarket: motor, transmisie, suspensie, caroserie etc.",
    sparePartItem2: "Accesorii auto: covorașe, boxe, camere video, sisteme multimedia.",
    sparePartItem3: "Consumabile: filtre, plăcuțe de frână, uleiuri, becuri.",
    reviews_title_small: "Recenzii",
    reviews_title_big: "Ce spun clientii noștri",
    reviews_description: "Ne mândrim cu serviciile oferite și cu încrederea pe care o acordă clienții noștri. Iată câteva păreri reale  despre experiența cu Autolider – importul auto din Coreea.",
    
    review_1_text: "„Am comandat o mașină prin Autolider și totul a decurs impecabil – de la consultanță până la livrare. Recomand cu încredere!”",
    review_1_name: "Maria Rusu",
    
    review_2_text: "„Procesul de import a fost simplu și transparent. Echipa a fost mereu disponibilă să răspundă la toate întrebările.”",
    review_2_name: "Ion Popescu",
    
    review_3_text: "„Piesele de schimb au fost livrate rapid și exact ce am comandat. Serviciu profesionist, prompt și de încredere!”",
    review_3_name: "Elena Dumbrăveanu",
    
    review_4_text: "„Mulțumit de prețuri și de calitatea serviciilor. Recomand Autolider pentru oricine dorește o mașină din Coreea.”",
    review_4_name: "Vlad Bălan",
    contact_support_title: "Sună-ne pentru suport:",
    contact_email_title: "Trimite-ne un email oricând",
    contact_address_title: "Adresa biroului",
    contact_address: "Strada Cedar, Chicago, 60601, SUA",
    contact_us_label: "Contactează-ne",
    get_in_touch_title: "Ia legătura cu noi",
    your_name: "Numele tău*",
    email_address: "Adresă de email*",
    phone_number: "Număr de telefon*",
    company_website: "Site-ul companiei*",
    describe_message: "Descrie mesajul tău*",
    submit_button: "Trimite",
    additional_services_title: "Servicii suplimentare",
    vehicle_equipment_services: "Servicii pentru vehicule și utilaje",
    service_intro: "Oferim o gamă largă de servicii suplimentare pentru vehicule și utilaje, adaptate cerințelor clienților: de la inspecții tehnice până la livrare personalizată.",
    service_1: "Inspecție tehnică detaliată înainte de livrare",
    service_2: "Consultanță în achiziția de utilaje specializate",
    service_3: "Transport securizat pentru vehicule grele și utilaje",
    service_4: "Servicii de înmatriculare și documentație completă",
    service_5: "Asistență post-livrare și mentenanță",
    service_6: "Flexibilitate în funcție de cerințele proiectului tău",
    contact_now: "Contactează-ne",
    call_support: "Sunați pentru ajutor",
     footer_contact_title: "Contactați-ne",
    footer_contact_email: "contact@revauto.com",
    footer_call_title: "Sunați-ne",
    footer_call_number: "+880 1218 123123",
    footer_chat_title: "Chat Live",
    footer_chat_hours: "Duminică - Vineri 24/7",
    footer_location_title: "Locație",
    footer_location_address: "123 - Locație magazin",
    footer_explore_title: "Explorează",
    footer_get_in_touch_title: "Ia legătura",
    footer_address: "Str. Valentin, nr. 27, New York, SUA - 752252",
    footer_phone: "(239) 555-0108",
    footer_email: "info@example.com",
    footer_privacy: "Politica de Confidențialitate",
    footer_terms: "Termeni de utilizare",
    footer_payment_methods: "Acceptăm:",
    paymentText:"Achitarea se face în baza unui contract, cu plata prin bancă în mai multe tranșe.",
    china_title: "China",
    chinaHeading: "China este un important producător de automobile, oferind o gamă variată de vehicule, inclusiv:",
    chinaAdvantage_1:"SUV-uri: Modele precum Chery, Haval, BYD, Voyah, Zeekr",
    chinaAdvantage_2:"Sedanuri: Geely Emgrand, BYD Qin, Xiaomi",
    chinaAdvantage_3:"Vehicule electrice: BYD e6, NIO ES6",
    feature1China: "Alege modelul dorit, având în vedere dotările, anul de fabricație și starea tehnică.",
    feature2China: "Alege metoda de transport maritim, cu termen de livrare de 45–60 de zile.",
    feature3China: "Plătește taxele vamale și accizele conform legislației moldovenești.",
    feature4China: "Înregistrează vehiculul la autoritățile competente și obține numerele de înmatriculare.",
    feature3TitleChina: "Vămuirea la intrarea în Moldova",
    feature4TitleChina: "Înmatricularea",
    deliveryStats: "Termenul de livrare din momentul achitării automobilului este de 60–80 de zile, prin Ro-Ro.",
    beforePrice: "De la",
    faqTitle: "Întrebări frecvente",
    faqQuestion_1:"Cât durează livrarea unui automobil din Coreea de Sud?",
    faqResponse_1:"Livrarea durează în medie între 60 și 80 de zile, în funcție de metoda de transport și formalitățile vamale.",
      faqQuestion_2:"Pot verifica istoricul mașinii înainte de a o cumpăra?",
    faqResponse_2:"Da, oferim verificare completă a istoricului prin platforme specializate înainte de achiziție.",
      faqQuestion_3:"Ce documente sunt necesare pentru înmatriculare în Moldova?",
    faqResponse_3:"Veți avea nevoie de actul de cumpărare, certificatul de origine, dovada plății taxelor vamale și raportul de inspecție tehnică.",
      faqQuestion_4:"Se pot achita mașinile în rate?",
    faqResponse_4:"Plata se face prin bancă, în mai multe tranșe, conform contractului de vânzare-cumpărare.",





    },
    ru: {
      faqQuestion_1: "Сколько времени занимает доставка автомобиля из Южной Кореи?",
faqResponse_1: "Доставка занимает в среднем от 60 до 80 дней в зависимости от способа транспортировки и таможенных процедур.",

faqQuestion_2: "Можно ли проверить историю автомобиля перед покупкой?",
faqResponse_2: "Да, мы предоставляем полную проверку истории через специализированные платформы перед покупкой.",

faqQuestion_3: "Какие документы нужны для регистрации автомобиля в Молдове?",
faqResponse_3: "Вам понадобятся договор купли-продажи, сертификат происхождения, подтверждение оплаты таможенных сборов и отчет технического осмотра.",

faqQuestion_4: "Можно ли оплатить автомобиль в рассрочку?",
faqResponse_4: "Оплата производится поэтапно через банк в соответствии с договором купли-продажи.",
    faqTitle: "Часто задаваемые вопросы",
    deliveryStats: "Срок доставки после оплаты автомобиля — 60–80 дней, морским транспортом Ro-Ro.",
        feature1China: "Выберите модель с учётом комплектации, года выпуска и технического состояния.",
    feature2China: "Выберите морской способ доставки со сроком 45–60 дней.",
    feature3China: "Оплатите таможенные пошлины и акцизы в соответствии с законодательством.",
    feature4China: "Зарегистрируйте автомобиль в компетентных органах и получите номера.",
    feature3TitleChina: "Tаможенное оформление при въезде в Молдову",
    feature4TitleChina: "Регистрация",
       china_title: "Китай ",
       chinaHeading:"Китай — крупный производитель автомобилей, предлагающий разнообразные модели, включая:",
    chinaAdvantage_1:"SUV: модели Chery, Haval, BYD, Voyah, Zeekr",
    chinaAdvantage_2:"Седаны: Geely Emgrand, BYD Qin, Xiaomi",
    chinaAdvantage_3:"Электромобили: BYD e6, NIO ES6",
      footer_contact_title: "Свяжитесь с нами",
    footer_contact_email: "contact@revauto.com",
    footer_call_title: "Позвоните нам",
    footer_call_number: "+880 1218 123123",
    footer_chat_title: "Онлайн чат",
    footer_chat_hours: "Воскресенье - Пятница 24/7",
    footer_location_title: "Адрес",
    footer_location_address: "123 - Адрес магазина",
    footer_explore_title: "Изучить",
    footer_get_in_touch_title: "Связаться",
    catalogText:"В Корее доступны не только корейские марки, такие как Kia, Hyundai, Genesis, SsangYong, но и немецкие бренды, например Audi, BMW, Mercedes, а также другие автомобили европейского производства. Немецкие автомобили из Кореи не отличаются от европейских — они также производятся в Европе, и запчасти совпадают с европейским рынком.",
    footer_address: "Валентин, улица Роуд 27, Нью-Йорк, США - 752252",
    footer_phone: "(239) 555-0108",
    footer_email: "info@example.com",
    footer_privacy: "Политика конфиденциальности",
    footer_terms: "Условия использования",
    footer_payment_methods: "Мы принимаем:",
      additional_services_title: "Дополнительные услуги",
    vehicle_equipment_services: "Услуги для автомобилей и техники",
    service_intro: "Мы предлагаем широкий спектр дополнительных услуг для автомобилей и техники, адаптированных к потребностям клиента: от технической проверки до индивидуальной доставки.",
    service_1: "Подробная техническая проверка перед доставкой",
    service_2: "Консультации по выбору специализированной техники",
    service_3: "Безопасная перевозка крупногабаритной техники и автомобилей",
    service_4: "Регистрация и полный пакет документов",
    service_5: "Поддержка после доставки и обслуживание",
    service_6: "Гибкость в зависимости от требований вашего проекта",
    contact_now: "Связаться с нами",
    call_support: "Позвоните за поддержкой",
      contact_support_title: "Позвоните нам за поддержкой:",
    contact_email_title: "Напишите нам в любое время",
    contact_address_title: "Адрес офиса",
    contact_address: "Сидар-стрит, Чикаго, 60601, США",
    contact_us_label: "Свяжитесь с нами",
    get_in_touch_title: "Связаться с нами",
    your_name: "Ваше имя*",
    email_address: "Электронная почта*",
    phone_number: "Номер телефона*",
    company_website: "Сайт компании*",
    describe_message: "Опишите ваше сообщение*",
    submit_button: "Отправить",
      sparePartItem1: "Оригинальные и неоригинальные запчасти: двигатель, трансмиссия, подвеска, кузов и т.д.",
      sparePartItem2: "Автоаксессуары: коврики, колонки, видеокамеры, мультимедийные системы.",
      sparePartItem3: "Расходные материалы: фильтры, тормозные колодки, масла, лампочки.",
       sparePartsTitle: "Запасные части и аксессуары для автомобилей из Кореи",
    sparePartsDescription: "Autolider предлагает не только автомобили, но и полный послепродажный сервис. Мы предоставляем широкий ассортимент оригинальных запчастей и совместимых аксессуаров для большинства корейских марок, таких как Hyundai, Kia, SsangYong и другие.",
       sparePartsTitle: "Запасные части и аксессуары для автомобилей из Кореи",
       firstLanguage: "Румынский",
    secondLanguage: "Русский",
    selectedLanguage: "Русский",
        home: "Главная",
       why_autolider: "Почему Autolider?",
    catalog: "Каталог",
    delivery_import: "Доставка & импорт",
    payment_methods: "Способы оплаты",
    contacts: "Контакты",
     contact_info: "Контактная информация",
    address: "Главная улица, Мельбурн, Австралия",
    email: "info@example.com",
    hours: "Пн–Пт, 09:00–17:00",
    get_quote: "Получить предложение",
     brand_name: "Autolider",
    slide1_line1: "Корейские автомобили",
    slide1_line2: "гарантированная доставка",
    slide1_paragraph: "Мы доставляем ваш автомобиль прямо из Кореи с гарантией качества и безопасности.",
    buy_this_car: "Связаться с нами",

    slide2_line1: "Автомобили из Кореи,",
    slide2_line2: "прямо к вам",
    slide2_paragraph: "Мы импортируем проверенные корейские автомобили с быстрой доставкой и полной документацией.",

    slide3_line1: "Мы импортируем ваш автомобиль",
    slide3_line2: "из Кореи",
    slide3_paragraph: "Выберите автомобиль из Кореи, а остальное мы сделаем за вас — прозрачно и без забот.",
    about_us_title: "Преимущества импорта",
    advantages_heading: "Преимущества импорта автомобиля из Южной Кореи по сравнению с Республикой Молдова",
    advantages_intro: "Выбирая автомобиль из Кореи, вы получаете конкурентные цены, высокое качество и широкий выбор моделей, адаптированных к вашим потребностям.",
    advantage_1: "Ниже стоимость покупки: Цены на автомобили (особенно подержанные) в Южной Корее могут быть ниже, чем в Республике Молдова, даже с учётом транспортных и таможенных сборов.",
    advantage_2: "Богатая комплектация: Южнокорейские модели часто хорошо оснащены даже в стандартных версиях (навигация, подогрев сидений, видеокамеры, датчики и т.д.).",
    advantage_3: "Строгий уход и обслуживание: Автомобили из Южной Кореи, как правило, хорошо обслужены и имеют полный сервисный исторический отчет.",
    advantage_4: "Доступ к истории автомобиля: Обычно легко проверить историю автомобиля (пробег, аварии, ремонты и т.д.) через специализированные платформы.",
    advantage_5: "Меньше мошенничества: Южнокорейский рынок более строго регулируется по сравнению с некоторыми практиками в Молдове (например, подделка пробега встречается гораздо реже).",
    advantage_6: "Прозрачность и ответственность на каждом этапе процесса импорта",
    about_button: "О компании Autolider",
    call_for_help: "Звоните за помощью",
    carTypeSuv: "Внедорожник",
    fuelDiesel: "Дизель",
    transmissionAutomatic: "Автомат",
    seats5: "5 мест",
    buy_this_car: "Связаться с нами",
    carNameSantaFe: "Hyundai Santa Fe",
    carNameKiaSorento: "Kia Sorento",
    carTypeSuv: "Внедорожник",
    fuelBenzina: "Бензин",
    transmissionAutomatic: "Автомат",
    seats7: "7 мест",
    buy_this_car: "Связаться с нами",
    transmissionManual: "Механическая",
    carTypeHybrid: "Гибрид",
    carTypeElectric: "Электрический",
    fuelHybrid: "Гибрид",
    fuelElectric: "Электрический",
    carNameHyundaiElantraHybrid: "Hyundai Elantra Гибрид",
    carNameHyundaiSonata: "Hyundai Sonata",
    carNameKiaK5: "Kia K5",
    carNameGenesisG70: "Genesis G70",
    carNameSamsungSM6: "Samsung SM6",

    carTypeHybrid: "Гибрид",
    carTypeSedan: "Седан",

    fuelHybrid: "Гибрид",
    fuelBenzina: "Бензин",
    fuelDiesel: "Дизель",

    transmissionAutomatic: "Автомат",
    transmissionManual: "Механика",

    seats5: "5 мест",
    ourCarsTitle: "Некоторые из наших автомобилей",
    buy_this_car: "Связаться с нами",
     feature1Title: "Выбор автомобиля",
    feature1Desc: "Выбирайте нужный автомобиль на одной из упомянутых платформ.",
    feature2Title: "Проверка истории",
    feature2Desc: "Убедитесь, что автомобиль имеет прозрачную и полную историю.",
    feature3Title: "Организация транспортировки",
    feature3Desc: "Сотрудничайте с транспортной компанией для доставки автомобиля в Республику Молдова.",
    feature4Title: "Таможня и регистрация",
    feature4Desc: "Оплатите таможенные сборы и акцизы, затем зарегистрируйте автомобиль согласно молдавскому законодательству.",
      importTitle: "Процесс импорта",
       yearsExperience: "Годы опыта",
       paymentMethodsAndCosts: "Способы оплаты",
        paymentMethods: "Способы оплаты",
        paymentText:"Оплата осуществляется на основании договора, с оплатой через банк несколькими траншами.",
    costStructure: "Структура расходов",
    purchaseSteps: "Этапы покупки",
     bankTransfer: "Международный банковский перевод",
    authorizedIntermediaries: "Оплата через авторизованных посредников",
    installmentPayment: "Оплата в рассрочку",
     carPrice: "Стоимость автомобиля",
    transportFees: "Транспортные и погрузочно-разгрузочные сборы",
    customsVAT: "Таможенные пошлины и НДС",
    extraServices: "Дополнительные услуги",
    reviews_title_small: "Отзывы",
    reviews_title_big: "Что говорят наши клиенты",
    reviews_description: "Мы гордимся предоставляемыми услугами и доверием, которое оказывают нам наши клиенты.Вот несколько реальных отзывов о опыте с Autolider – импорт автомобилей из Кореи.",
    
    review_1_text: "«Я заказала автомобиль через Autolider, и все прошло безупречно – от консультации до доставки. Рекомендую с уверенностью!»",
    review_1_name: "Мария Русу",
    
    review_2_text: "«Процесс импорта был простым и прозрачным. Команда всегда была доступна, чтобы ответить на все вопросы.»",
    review_2_name: "Ион Попеску",
    
    review_3_text: "«Запчасти были доставлены быстро и точно такие, какие я заказал. Профессиональный, оперативный и надежный сервис!»",
    review_3_name: "Елена Думбраяну",
    
    review_4_text: "«Доволен ценами и качеством услуг. Рекомендую Autolider всем, кто хочет автомобиль из Кореи.»",
    review_4_name: "Влад Балан",
    beforePrice: "От",
    
    }
  };

  const languageSelector = document.querySelectorAll('.dropdown-item');
const selectedLangDisplay = document.getElementById('selectedLanguage');

languageSelector.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    const lang = item.getAttribute('data-lang');

    // Update all elements with data-i18n, including the selectedLanguage span
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  });
});


