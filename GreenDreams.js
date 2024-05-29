const swiper = new Swiper(".reviews__slider", {
  slidesPreView: 2,
  spaceBetween: 22,
  loop: true,

  navigation: {
    nextEl: ".reviews__item-prev",
    prevEl: ".reviews__item-next",
  },
});
const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu--open");
});
