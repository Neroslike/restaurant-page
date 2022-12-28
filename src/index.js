import navbar from "./modules/navbar";
import footer from "./modules/footer";
import mainPage from "./modules/mainPage";
import menuPage from "./modules/menu";
import "./styles/main.css";
import aboutPage from "./modules/about";
import contactPage from "./modules/contact";
import helper from "./modules/helper";

navbar();
mainPage();
footer();

let main = document.querySelectorAll(".main");
let menu = document.querySelectorAll(".menu");
let about = document.querySelectorAll(".about");
let contact = document.querySelectorAll(".contact");

main[0].addEventListener("click", function (e) {
  helper.highlight(e.target);
  helper.cleanContent();
  mainPage();
});
menu[0].addEventListener("click", function (e) {
  helper.highlight(e.target);
  helper.cleanContent();
  menuPage();
});
about[0].addEventListener("click", function (e) {
  helper.highlight(e.target);
  helper.cleanContent();
  aboutPage();
});
contact[0].addEventListener("click", function (e) {
  helper.highlight(e.target);
  helper.cleanContent();
  contactPage();
});
