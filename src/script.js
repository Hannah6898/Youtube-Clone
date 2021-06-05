const hamburgerBtn = document.getElementById("hamburger-btn");
const mainNav = document.getElementById("navbarScroll");
const mainContainer = document.querySelector(".main_container");
const categories = document.querySelector(".categories");
const closeBtn = document.querySelector(".video-section-title-close");
const newsSection = document.querySelector(".news-section");
const recommendationMsg = document.querySelector(".message");
const undoLink = document.querySelector(".link");

function toggleBtn(event) {
  event.preventDefault();
  mainNav.classList.toggle("hide");
  mainContainer.classList.toggle("now");
  categories.classList.toggle("expand");
}

function closeSection(event) {
  event.preventDefault();
  newsSection.classList.toggle("hide");
  recommendationMsg.classList.toggle("show");
}

function openSection(event) {
  event.preventDefault();
  newsSection.classList.remove("hide");
  recommendationMsg.classList.remove("show");
}

hamburgerBtn.addEventListener("click", toggleBtn);
closeBtn.addEventListener("click", closeSection);
undoLink.addEventListener("click", openSection);

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
