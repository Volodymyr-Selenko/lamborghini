const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");
const promoArrowButton = document.querySelector(".promo__arrow");

const navBlock = document.querySelector(".nav");

const menuInfoBtn = document.querySelector(".menu-info");
const menuTreckBtn = document.querySelector(".menu-treck");
const menuLamboBtn = document.querySelector(".menu-lambo");
const menuNewsBtn = document.querySelector(".menu-news");
const menuTicketBtn = document.querySelector(".menu-ticket");
const menuWatchBtn = document.querySelector(".menu-watch");
const menuContactBtn = document.querySelector(".menu-contact");

const infoSection = document.querySelector(".info");
const trackSection = document.querySelector(".track");
const evoSection = document.querySelector(".evo");
const blogSection = document.querySelector(".blog");
const videoSection = document.querySelector(".evo-white__video");
const contactSection = document.querySelector(".footer");

const navObjects = [
  { button: menuInfoBtn, section: infoSection },
  { button: menuTreckBtn, section: trackSection },
  { button: menuLamboBtn, section: evoSection },
  { button: menuNewsBtn, section: blogSection },
  { button: menuTicketBtn, section: contactSection },
  { button: menuWatchBtn, section: videoSection },
  { button: menuContactBtn, section: contactSection },
];

navBlock.addEventListener("click", (event) => {
  const eventTarget = event.target;
  if (!eventTarget.id) {
    const findedButton = navObjects.find((item) =>
      eventTarget.contains(item.button)
    );
    !!findedButton &&
      findedButton.section.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
  }
});

promoArrowButton.addEventListener("click", () => {
  infoSection.scrollIntoView({ block: "start", behavior: "smooth" });
});

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.23189540307247, lng: -8.628209073000978 },
    zoom: 14,
    styles: [
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [
          {
            saturation: "-100",
          },
        ],
      },
      {
        featureType: "administrative.province",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 65,
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: "50",
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: "-100",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "all",
        stylers: [
          {
            lightness: "30",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "all",
        stylers: [
          {
            lightness: "40",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            hue: "#ffff00",
          },
          {
            lightness: -25,
          },
          {
            saturation: -97,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels",
        stylers: [
          {
            lightness: -25,
          },
          {
            saturation: -100,
          },
        ],
      },
    ],
  });
}

window.initMap = initMap;
