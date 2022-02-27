const countryParts = document.querySelectorAll(".country-parts");
const svg = document.querySelector("svg");
const path = svg.lastElementChild.lastElementChild.children;

for (let i = 0; i < countryParts.length; i++) {
  path[i].addEventListener("mouseover", function () {
    countryParts[i].style.display = "block";
  });
  path[i].addEventListener("mouseout", function () {
    countryParts[i].style.display = "none";
  });
}
