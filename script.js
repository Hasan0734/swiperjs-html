const swiper1 = new Swiper("#swiper1", {
  spaceBetween: 10,
  slidesPerGroup: 3,
  speed: 900,
  navigation: {
    nextEl: "#swiper1next",
    prevEl: "#swiper1prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2.5,
    },
    390:{
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

const swiper2 = new Swiper("#swiper2", {
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
});

// Loop through the elements and create Swiper slides
luckybirds.forEach((dt) => {
  // Create a new swiper slide
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");

  // Create a card and set its content
  const card = document.createElement("div");
  card.classList.add("card", "rounded-3", "luckybird_card");
  const cardImage = document.createElement("img");
  cardImage.src = dt.image;
  cardImage.classList.add("card-img-top", "luckybird_image");

  cardImage.alt = "...";
  // Append the card image to the card
  card.appendChild(cardImage);

  // Append the card to the swiper slide
  swiperSlide.appendChild(card);

  // Append the swiper slide to the swiper wrapper
  luckybirdSection.appendChild(swiperSlide);
});

const exampleData3 = [
  {
    id: 1,
    logo: "https://freecash.com/public/img/ayetLogo.webp",
    title: "Ayet Studios",
    bgImg: "https://freecash.com/public/img/earn/wall-ayetstudios-card-bg.png",
    bonous: 50,
  },
  {
    id: 2,
    logo: "https://freecash.com/public/img/AdGatemediaGlow.png",
    title: "AdGate",
    bgImg: "https://freecash.com/public/img/earn/wall-adgate-card-bg.png",
    bonous: 45,
  },
  {
    id: 3,
    logo: "https://freecash.com/public/img/revu-logo-white.svg",
    title: "Revenue Universe",
    bgImg: "https://freecash.com/public/img/earn/wall-revu-card-bg.png",
    bonous: 50,
  },
  {
    id: 5,
    logo: "https://freecash.com/public/img/earn/timewall-logo.png",
    title: "TimeWall",
    bgImg: "https://freecash.com/public/img/earn/wall-timewall-card-bg.png",
    bonous: 50,
  },
  {
    id: 6,
    logo: "https://freecash.com/public/img/earn/torox.png",
    title: "Torox",
    bgImg: "https://freecash.com/public/img/earn/wall-torox-card-bg.png",
    bonous: 50,
  },
  {
    id: 7,
    logo: "https://freecash.com/public/img/earn/monlix-logo.svg?v=2",
    title: "Monlix",
    bgImg: "https://freecash.com/public/img/earn/wall-monlix-card-bg.png",
    bonous: 50,
  },
  {
    id: 8,
    logo: "https://freecash.com/public/img/earn/notik_logo.png",
    title: "Notik",
    bgImg: "https://freecash.com/public/img/earn/wall-notik-card-bg.png",
    bonous: 50,
  },
  {
    id: 9,
    logo: "https://freecash.com/public/img/AdGemGlow.webp",
    title: "AdGem",
    bgImg: "https://freecash.com/public/img/earn/wall-adgem-card-bg.png",
    bonous: 50,
  },
  {
    id: 10,
    logo: "https://freecash.com/public/img/earn/mm-wall-v3.svg",
    title: "MM Wall",
    bgImg: "https://freecash.com/public/img/earn/wall-mm-wall-card-bg.png",
    bonous: 50,
  },
  {
    id: 11,
    logo: "https://freecash.com/public/img/lootably-logo.png",
    title: "Lootbaly",
    bgImg: "https://freecash.com/public/img/earn/wall-lootably-card-bg.png",
    bonous: 50,
  },
  {
    id: 12,
    logo: "https://freecash.com/public/img/AdscendMediaGlow.webp",
    title: "Adscend",
    bgImg: "https://freecash.com/public/img/earn/wall-adscend-card-bg.png",
    bonous: 50,
  },
  {
    id: 13,
    logo: "https://freecash.com/public/img/earn/bitlabs-offers-logo.svg",
    title: "Bitlabs Offers",
    bgImg:
      "https://freecash.com/public/img/earn/wall-bitlabs-offers-card-bg.png",
    bonous: 50,
  },
  {
    id: 14,
    logo: "https://freecash.com/public/img/earn/revlum.png",
    title: "Revlum",
    bgImg: "https://freecash.com/public/img/earn/wall-revlum-card-bg.png",
    bonous: 50,
  },
];

const example3 = document.querySelector("#example3");

const swiper3 = new Swiper("#swiper3", {
  spaceBetween: 10,
  slidesPerGroup: 3,
  speed: 900,
  navigation: {
    nextEl: "#swiper3next",
    prevEl: "#swiper3prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2.5,
    },
    390:{
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

// Loop through the elements and create Swiper slides
exampleData3.forEach((dt) => {
  // Create a new swiper slide
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");

  // Create a card and set its content
  const card = document.createElement("div");
  card.classList.add("card", "rounded-3", "exampleCard");
  card.style.backgroundImage = `url(${dt.bgImg})`;

  const imgDiv = document.createElement("div");
        imgDiv.classList.add("imgArea")

  const cardImage = document.createElement("img");
  cardImage.src = dt.logo;
  cardImage.alt = "...";

  imgDiv.appendChild(cardImage);

  const body = document.createElement("div");
  body.classList.add("cardBody");
  const title = document.createElement("h4");
  title.classList.add("text-white");
  title.innerText = dt.title;

  body.appendChild(title);
  // Append the card image to the card
  card.appendChild(imgDiv);
  card.appendChild(body);

  // Append the card to the swiper slide
  swiperSlide.appendChild(card);

  // Append the swiper slide to the swiper wrapper
  example3.appendChild(swiperSlide);
});
