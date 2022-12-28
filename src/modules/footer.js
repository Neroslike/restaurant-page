import Vector from "../assets/Vector.png";

const footer = () => {
  let body = document.querySelector("body");
  let footer = document.createElement("div");
  let github = document.createElement("div");
  let githubVector = document.createElement("img");
  let githubLink = document.createElement("a");

  githubLink.innerHTML = "Albert Vilera";
  githubLink.href = "https://github.com/Neroslike/";
  githubLink.target = "_blank";
  githubVector.src = Vector;
  github.append(githubVector);
  github.append(githubLink);
  footer.append(github);
  body.append(footer);
  footer.classList.add("footer");
  github.classList.add("github");
};

export default footer;
