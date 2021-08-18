const hamburgerBtn = document.getElementById("hamburger-btn");
const mainNav = document.getElementById("navbarScroll");
const mainContainer = document.querySelector(".main_container");
const categories = document.querySelector(".categories");
const closeBtn = document.querySelector(".video-section-title-close");
const newsSection = document.querySelector(".news-section");
const recommendationMsg = document.querySelector(".message");
const undoLink = document.querySelector(".link");

/*This function hides the main vertical navigation bar and expand the page*/
function toggleBtn(event) {
  event.preventDefault();
  mainNav.classList.toggle("hide");
  mainContainer.classList.toggle("now");
  categories.classList.toggle("expand");
}

//This function deletes a section of videos
function deleteSection(event) {
  event.preventDefault();
  newsSection.classList.toggle("hide");
  recommendationMsg.classList.toggle("show");
}

//This function reinstates the deleted video section
function addSection(event) {
  event.preventDefault();
  newsSection.classList.remove("hide");
  recommendationMsg.classList.remove("show");
}

hamburgerBtn.addEventListener("click", toggleBtn);
closeBtn.addEventListener("click", deleteSection);
undoLink.addEventListener("click", addSection);

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
