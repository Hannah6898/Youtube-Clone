const btn = document.getElementById("hamburger-btn");
const mainNav = document.getElementById("navbarScroll");
const mainContainer = document.querySelector(".main_container");

function toggleBtn() {
  mainNav.classList.toggle("hide");
  mainContainer.classList.toggle("now");
  console.log(mainContainer);
  console.log(mainNav);
}

btn.addEventListener("click", toggleBtn);
