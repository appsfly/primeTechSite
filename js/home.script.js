document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
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
    slidesPerView: 1, // מציג שקופית אחת בכל פעם
    spaceBetween: 10,
  });

  // הגדרת Lightbox2
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    fadeDuration: 300,
  });
});
