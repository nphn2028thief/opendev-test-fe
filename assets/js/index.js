import SlideBanner from "./slide.js";
import Attraction from "./attraction.js";

const header = document.getElementById("header");
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.backgroundColor = "black";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Init slide
document.addEventListener("DOMContentLoaded", () => {
  new SlideBanner();
  new Attraction();
});
