import Fb from "../assets/facebook.svg";
import Tw from "../assets/twitter.svg";
import Ig from "../assets/ig.svg";

const mainPage = () => {
  let content = document.querySelector("#content");
  let hero = document.createElement("div");
  let social = document.createElement("div");

  const createHero = () => {
    let logo = document.createElement("h1");
    let motto = document.createElement("h2");
    let button = document.createElement("button");
    let innerDiv = document.createElement("div");
    button.innerHTML = "Make a reservation";
    motto.innerHTML = "Fine pastries and coffe, a match made in heaven.";
    logo.innerHTML = "Odin's Café";

    innerDiv.classList.add("innerHero");
    hero.classList.add("hero");
    innerDiv.append(logo);
    innerDiv.append(motto);
    innerDiv.append(button);
    hero.append(innerDiv);
    content.append(hero);
  };

  const createSocial = () => {
    let header = document.createElement("h2");
    let innerDiv = document.createElement("div");
    let facebook = document.createElement("div");
    let facebookIcon = document.createElement("img");
    let twitter = document.createElement("div");
    let twitterIcon = document.createElement("img");
    let instagram = document.createElement("div");
    let instagramIcon = document.createElement("img");

    facebookIcon.src = Fb;
    facebook.append(facebookIcon);
    facebook.innerHTML += `<h2 class='contactNetwork'>OdinsCafe</h2>`;

    twitterIcon.src = Tw;
    twitter.append(twitterIcon);
    twitter.innerHTML += `<h2 class='contactNetwork'>@OdinsCafe</h2>`;

    instagramIcon.src = Ig;
    instagram.append(instagramIcon);
    instagram.innerHTML += `<h2 class='contactNetwork'>@OdinsCafe</h2>`;

    header.innerHTML = "You can find us in:";

    innerDiv.classList.add("networksContainer");
    header.classList.add("contactHeader");
    social.classList.add("social");

    social.append(header);
    innerDiv.append(facebook);
    innerDiv.append(twitter);
    innerDiv.append(instagram);
    social.append(innerDiv);
    content.append(social);
  };

  createHero();
  createSocial();
};

export default mainPage;
