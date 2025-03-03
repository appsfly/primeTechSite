document.addEventListener("DOMContentLoaded", function () {
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
});
