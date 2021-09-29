var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

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


