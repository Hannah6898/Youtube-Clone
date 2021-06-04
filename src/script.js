const btn = document.getElementById("hamburger-btn");
const mainNav = document.getElementById("navbarScroll");
const mainContainer = document.querySelector(".main_container");
const categories = document.querySelector(".categories");

function toggleBtn() {
  mainNav.classList.toggle("hide");
  mainContainer.classList.toggle("now");
  categories.classList.toggle("expand");
}

btn.addEventListener("click", toggleBtn);

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
