

// const swiperEl = document.querySelector('swiper-container');

// const prev = document.querySelector('#prev');
// const next = document.querySelector('#next');


// next.addEventListener('click', () => {
//   swiperEl.swiper.slideNext();
// });
// prev.addEventListener('click', () => {
//     swiperEl.swiper.slidePrev();
//   });


//   const swiperParams = {
//     slidesPerView: 8,
//     spaceBetween
//     breakpoints: {
//       640: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     },
//     on: {
//       init() {
//         // ...
//       },
//     },
//   };

//   // now we need to assign all parameters to Swiper element
//   Object.assign(swiperEl, swiperParams);




const swiper = new Swiper('.swiper', {
    slidesPerView: 8.5,
    spaceBetween: 10,
    freeMode: true,
    navigation: {
      nextEl: '#next',
      prevEl: '#prev',
    },
  
  breakpoints: {
    320: {
      slidesPerView: 3.5,
    
    },

    640: {
      slidesPerView: 4.5,
   
    },
    830: {
        slidesPerView: 6.5,
    },
    1160: {
        slidesPerView: 7.5,
    },
    1332: {
        slidesPerView: 8.5,
    },
    1500: {
        slidesPerView: 9.5,
    },
    1600: {
        slidesPerView: 10.5,
    }
  }
  });