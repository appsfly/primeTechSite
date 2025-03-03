document.addEventListener("DOMContentLoaded", function () {
  const swiperGallery = new Swiper(".mySwiper", {
    loop: true, // חזרה אינסופית
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000, // כל 3 שניות
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });

  // קרוסלת המודעות - עם אנימציה חלקה יותר
  const newsSwiper = new Swiper(".newsSwiper", {
    loop: true,
    autoplay: {
      delay: 1, // עיכוב מינימלי
      disableOnInteraction: false,
    },
    speed: 5000, // זמן המעבר בין שקופיות (5 שניות)
    slidesPerView: 1, // מציג שקופית אחת בכל פעם
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // הגדרת Lightbox2
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    fadeDuration: 300,
  });
});
