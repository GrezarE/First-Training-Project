//Slider Start

var swiper = new Swiper(".mySwiper", {
  watchOverflow: true,
  pagination: {
    el: ".swiper-pagination",
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   1440: {
  //     slidesPerView: "auto",
  //   },
  // },
  // on: {
  //   init: function() {
  //     toggleWidth();
  //   },
  //   resize: function() {
  //     toggleWidth();
  //   },
  // },
});

// swiper.init();

// function toggleWidth(e) {
//   const fieldValueWidth = document.querySelector(".valueWidth");
//   fieldValueWidth.innerText = window.innerWidth + " px";
// }

// Slider End

const popupModale = document.querySelector('.popup');
const button = document.querySelector('.button');
const headerButton = document.querySelector('.header__button');
const footerButton = document.querySelector('.footer__button');
const popubButton = document.querySelector('.popup__button');


function closeOverlay(event) {
  const popupwindow = document.querySelector('.popup_opened')
  if (event.target === popupwindow) {
    popupModale.classList.remove('popup_opened')
  }
}

popupModale.addEventListener('click', closeOverlay)

function openPopup(popup) {
  popup.classList.add('popup_opened')
};

function closePopup(popup) {
  popup.classList.remove('popup_opened')
};

headerButton.addEventListener('click', function () {openPopup(popupModale)});
footerButton.addEventListener('click', function () {openPopup(popupModale)});

function registration(evt) {
  evt.preventDefault();
  closePopup(popupModale);
}

popubButton.addEventListener('click', registration)

// const width = document.documentElement.clientWidth
// console.log(width)
