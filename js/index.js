//функция для смены класса у блока
const toggleClass = function (block, nameClass) {
  block.classList.toggle(`${nameClass}`)
}
//убрать скролл на странице
const noScroll = function () {
  document.body.classList.toggle('noscroll');
}
//анимация бургер-меню
const headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', () => {
  toggleClass(headerBurger, 'active');
})
// открытие и закрытие навигации в мобильной версии
const mobilePopup = document.querySelector(".mobile-headerPopup");
const menu = document.querySelector(".header__nav-list").cloneNode(1);

headerBurger.addEventListener('click', openPopup);

function openPopup(e) {
  e.preventDefault();
  toggleClass(mobilePopup, 'open');
  renderPopup();
  noScroll();
}

function renderPopup() {
  mobilePopup.appendChild(menu);
}

menu.addEventListener('click', function () {
  toggleClass(mobilePopup, 'open');
  noScroll();
  toggleClass(headerBurger, 'active');
})

// открытие и закрытие окна резервации столика
const reservePopup = document.querySelector('.reservePopup');
const reserveBtn = document.getElementById('reserve');
const reserveForm = document.querySelector('.reservePopup__form');

reserveBtn.onclick = function () {
  toggleClass(reservePopup, 'visible');
}
reservePopup.addEventListener('click', function (e) {
  if (!e.composedPath().includes(reserveForm))
    toggleClass(reservePopup, 'visible');
})
//отправка формы
const form = document.getElementById('reserveForm');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  fetch('./php/feedback.php', {
    method: 'POST',
    body: formData,
    mode: 'no-cors',
  }).then(() => alert('The vote was send'))
    .catch(() => alert('Error'))
}

//слайдер
new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev'
  },
  speed: 500,
  loop: true,
});
