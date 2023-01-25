//функция для смены класса у блока
const changeActiveBlock = function(block, nameClass) {
    block.classList.toggle(`${nameClass}`)
}
//убрать скролл на странице
const noScroll = function() {
  document.body.classList.toggle('noscroll');
}
//анимация бургер-меню
const headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', () => {
  changeActiveBlock(headerBurger, 'active');
})
// открытие и закрытие навигации в мобильной версии
const mobilePopup = document.querySelector(".mobile-headerPopup");
const menu = document.querySelector(".header__nav-list").cloneNode(1);

headerBurger.addEventListener('click', openPopup);

function openPopup(e) {
  e.preventDefault();
  changeActiveBlock(mobilePopup,'open');
  renderPopup();
  noScroll();
}

function renderPopup() {
  mobilePopup.appendChild(menu);
}

menu.addEventListener('click', function() {
  changeActiveBlock(mobilePopup,'open');
  noScroll();
  changeActiveBlock(headerBurger,'active');
})

// открытие и закрытие окна резервации столика
const reservePopup = document.querySelector('.reservePopup');
const reserveBtn = document.getElementById('reserve');
const reserveForm = document.querySelector('.reservePopup__form');

reserveBtn.onclick = function() {
  changeActiveBlock(reservePopup, 'visible');
}
reservePopup.addEventListener('click', function(e) {
  if(!e.composedPath().includes(reserveForm))
    changeActiveBlock(reservePopup, 'visible');
})

//слайдер
new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.next',
		prevEl: '.prev'
},
  speed: 500,
});