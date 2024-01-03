

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
    navigation: {
      nextEl: '#next',
      prevEl: '#prev',
    },
  
      // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 4,
    
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 4,
    
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 4,
   
//     },
//     1100: {
//         slidesPerView: 5.5,

//     }
//   }
  });