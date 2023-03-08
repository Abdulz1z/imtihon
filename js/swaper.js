/** @format */

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
   // Optional parameters

   loop: true,
   delay: 100,
   autoplay: true,

   slidesPerView: 2,
   spaceBetween: 50,
   effect: "fade",
   // If we need pagination
   pagination: {
      el: ".swiper-pagination",
   },

   // Navigation arrows
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});
