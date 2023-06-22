const menuElement = document.querySelector(".menu-btn-frame");
const iconElement = document.querySelector(".icon");
const menuRow1 = document.querySelector(".menu-btn-row-1");
const menuRow2 = document.querySelector(".menu-btn-row-2");
const menuRow3 = document.querySelector(".menu-btn-row-3");
const header_inner_frame_color = document.querySelector(
  ".header-inner-frame-color"
);
const header_drop_down = document.querySelector(".header-drop-down");
const header_animation = document.querySelector(".header-animation");

menuElement.addEventListener("click", function () {
  // 1) Hide the icon.
  iconElement.classList.toggle("hidden");

  // 2) Display the X.
  menuRow1.classList.toggle("hidden");
  menuRow2.classList.toggle("rotation-middle");
  menuRow3.classList.toggle("rotation-bottom");
  menuElement.classList.toggle("menu-btn-frame-centering"); // centers the x

  // 3) Change the background color of the header and add padding.
  header_inner_frame_color.classList.toggle("header-drop-down-styles");

  // 4) Display the drop down menu w/ the animation.
  header_animation.classList.toggle("header-drop-down-animation");
  header_animation.classList.toggle("hidden");
});
