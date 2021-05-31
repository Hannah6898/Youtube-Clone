const btn = document.getElementById("hamburger-btn");
const mainNav = document.getElementById("navbarScroll");
const mainContainer = document.querySelector(".main_container");
const carousel = document.querySelector(".carousel");

function toggleBtn() {
  mainNav.classList.toggle("hide");
  mainContainer.classList.toggle("now");
  carousel.classList.toggle("expand");
}

btn.addEventListener("click", toggleBtn);
