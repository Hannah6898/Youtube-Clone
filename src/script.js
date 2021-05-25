const btn = document.getElementById("hamburger-btn");
const mainNav = document.getElementById("navbarScroll");

function toggleBtn() {
  mainNav.classList.toggle("hide");
}

btn.addEventListener("click", toggleBtn);
