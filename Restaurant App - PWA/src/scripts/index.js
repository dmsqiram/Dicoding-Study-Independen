import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import App from "./views/app";
import swRegister from "./utils/sw-register";

// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const app = new App({
  content: document.querySelector("#main-content"),
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});
