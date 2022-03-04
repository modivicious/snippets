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