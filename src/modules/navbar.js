import helper from "./helper";

const navbar = () => {
  let body = document.querySelector("body");
  let navbar = document.createElement("div");
  let navlinks = document.createElement("div");
  const headers = [
    ["Main page", "main"],
    ["Menu", "menu"],
    ["About us", "about"],
    ["Contact", "contact"],
  ];

  const createNavLink = (array) => {
    let header3 = helper.myCreateElement("h3", array[0], array[1]);
    header3.classList.add("navlink");
    return header3;
  };

  const createVline = () => {
    let vline = document.createElement("div");
    vline.classList.add("vline");

    return vline;
  };

  headers.forEach((header, index) => {
    navlinks.append(createNavLink(header));
    if (headers.length - 1 != index) navlinks.append(createVline());
  });

  navbar.append(navlinks);

  navlinks.classList.add("navlinks");
  navbar.classList.add("navbar");

  body.prepend(navbar);
};

export default navbar;
