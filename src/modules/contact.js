import Fb from "../assets/bfb.svg";
import Tw from "../assets/btw.svg";
import Ig from "../assets/big.svg";
import helper from "./helper";

let contact = () => {
  let content = document.querySelector("#content");
  let container = helper.myCreateElement("div", "", "container");
  let header = helper.myCreateElement("h1", "Contact", "header");
  let social = helper.myCreateElement("div", "", "social socialContact");
  let contactHeader = helper.myCreateElement(
    "h2",
    "Or use our direct channels:",
    "contactHeader"
  );
  let directContainer = helper.myCreateElement("div", "", "directContainer");
  let phone = helper.myCreateElement(
    "p",
    "Phone: (123) 456-7890",
    "itemDescription"
  );
  let email = helper.myCreateElement(
    "p",
    "Email: realemail@veryreal.com",
    "itemDescription"
  );

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
    facebook.innerHTML += `<h2 class='contactNetwork'>MaricosCafe</h2>`;

    twitterIcon.src = Tw;
    twitter.append(twitterIcon);
    twitter.innerHTML += `<h2 class='contactNetwork'>@MaricosCafe</h2>`;

    instagramIcon.src = Ig;
    instagram.append(instagramIcon);
    instagram.innerHTML += `<h2 class='contactNetwork'>@MaricosCafe</h2>`;

    header.innerHTML = "You can find us in:";

    innerDiv.classList.add("networksContainer");
    header.classList.add("contactHeader");

    social.append(header);
    innerDiv.append(facebook);
    innerDiv.append(twitter);
    innerDiv.append(instagram);
    social.append(innerDiv);
    return social;
  };

  content.append(header);
  container.append(createSocial());
  container.append(contactHeader);
  directContainer.append(phone);
  directContainer.append(email);
  container.append(directContainer);
  content.append(container);
};

export default contact;
