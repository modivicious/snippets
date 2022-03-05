const menuList = document.querySelector(".menu__list");
const menuOverlay = document.querySelector(".menu .overlay");
const menuBtn = document.querySelector(".menu__btn");
const menuLogin = document.querySelector(".menu__login");

function toggleMenu() {
  menuList.classList.toggle("menu__list--active");
  menuOverlay.classList.toggle("menu__overlay--active");
  menuBtn.classList.toggle("menu__btn--active");
  menuLogin.classList.toggle("menu__login--active");
  document.body.classList.toggle("hide-overflow");
}

menuBtn.on("click", () => toggleMenu());
menuOverlay.on("click", () => toggleMenu());


// JQ:

// function toggleMenu() {
//   $(".menu__list").toggleClass("menu__list--active");
//   $(".menu__overlay").toggleClass("menu__overlay--active");
//   $(".menu__btn").toggleClass("menu__btn--active");
//   $(".menu__login").toggleClass("menu__login--active");
//   $("body").toggleClass("hide-overflow");
// }

// $(".menu__btn").on("click", () => toggleMenu());
// $(".menu__overlay").on("click", () => toggleMenu());


let lastScroll = 0;
const header = document.querySelector(".header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

window.addEventListener("scroll", () => {
  if (screenWidth < 1025) {
    if (scrollPosition() > screenHeight)
      header.classList.add("header--fixed");
    else header.classList.remove("header--fixed");

    if (scrollPosition() > lastScroll || scrollPosition() < screenHeight)
      //scroll down
      header.classList.remove("header--pinned");
    else if (scrollPosition() < lastScroll)
      //scroll up
      header.classList.add("header--pinned");
  }
  lastScroll = scrollPosition();
});