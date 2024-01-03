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

const swiper1 = new Swiper("#swiper1", {
  slidesPerView: 8.5,
  spaceBetween: 10,
  slidesPerGroup: 3,
  speed: 900,
  navigation: {
    nextEl: "#swiper1next",
    prevEl: "#swiper1prev",
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
    },
  },
});

const luckybirds = [
  { id: 1, image: "https://luckybird.io/img/zeusSlots.bb7d3cb1.png" },
  { id: 2, image: "https://luckybird.io/image/slots/TrampDay.png" },
  { id: 3, image: "https://luckybird.io/image/slots/BookOfPanda.png" },
  { id: 4, image: "https://luckybird.io/image/slots/BonanzaBillion.png" },
  { id: 5, image: "https://luckybird.io/image/slots/BonanzaBillion.png" },
  { id: 6, image: "https://luckybird.io/image/slots/DiceBonanza.png" },
  { id: 7, image: "https://luckybird.io/image/slots/MummysGold.png" },
  { id: 8, image: "https://luckybird.io/image/slots/SweetRushMegaways.png" },
  { id: 9, image: "https://luckybird.io/image/slots/HalloweenBonanza.png" },
  { id: 10, image: "https://luckybird.io/image/slots/BoneBonanza.png" },
  { id: 11, image: "https://luckybird.io/image/slots/BookOfCats.png" },
  {
    id: 12,
    image: "https://luckybird.io/image/slots/LuckyLadyMoonMegaways.png",
  },
  { id: 13, image: "https://luckybird.io/image/slots/LuckyLadyMoon.png" },
  { id: 14, image: "https://luckybird.io/image/slots/BigAtlantisFrenzy.png" },
  { id: 15, image: "https://luckybird.io/image/slots/PennyPelican.png" },
  { id: 16, image: "https://luckybird.io/image/slots/AztecMagicMegaways.png" },
  { id: 17, image: "https://luckybird.io/image/slots/Gemhalla.png" },
  { id: 18, image: "https://luckybird.io/image/slots/BeerBonanza.png" },
  { id: 19, image: "https://luckybird.io/image/slots/DigDigDigger.png" },
  { id: 20, image: "https://luckybird.io/image/slots/BookOfCatsMegaways.png" },
  { id: 21, image: "https://luckybird.io/image/slots/MiceAndMagic.png" },
  { id: 22, image: "https://luckybird.io/image/slots/AlienFruits.png" },
  { id: 23, image: "https://luckybird.io/image/slots/ElvisFrogTrueways.png" },
  { id: 24, image: "https://luckybird.io/image/slots/CloverBonanza.png" },
  { id: 25, image: "https://luckybird.io/image/slots/WildChicago.png" },
];

const luckybirdSection = document.querySelector("#luckybirdSection");


const swiper2 = new Swiper ('#swiper2',{
    slidesPerView: 8.5,
    spaceBetween: 4,
    slidesPerGroup: 3,
    speed: 900,
    navigation: {
      nextEl: "#swiper2next",
      prevEl: "#swiper2prev",
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
      },
    },
})




 // Loop through the elements and create Swiper slides
 luckybirds.forEach(dt => {
    // Create a new swiper slide
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');

    // Create a card and set its content
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('rounded-3');
    card.classList.add('luckybird_card');

    const cardImage = document.createElement('img');
    cardImage.src = dt.image;
    cardImage.classList.add('card-img-top');
    cardImage.classList.add('luckybird_image');

    cardImage.alt = '...';

    // Append the card image to the card
    card.appendChild(cardImage);

    // Append the card to the swiper slide
    swiperSlide.appendChild(card);

    // Append the swiper slide to the swiper wrapper
    luckybirdSection.appendChild(swiperSlide);
  });



