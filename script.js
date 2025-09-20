   const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction:false,
    },
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      600: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 15,
      },
      900: {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 50,
      }
    }

    });