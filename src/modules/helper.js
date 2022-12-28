const helper = (() => {
  const myCreateElement = (elementName, content = "", className = "") => {
    let element = document.createElement(elementName);
    if (content != "") element.innerHTML = content;
    // if (className != "") element.classList.add(className);
    if (className != "") {
      let classArray = className.split(" ");
      classArray.forEach((item) => {
        element.classList.add(item);
      });
    }
    return element;
  };

  const cleanContent = () => {
    let content = document.querySelector("#content");
    content.innerHTML = "";
  };

  const highlight = (element) => {
    let main = document.querySelectorAll(".main");
    let menu = document.querySelectorAll(".menu");
    let about = document.querySelectorAll(".about");
    let contact = document.querySelectorAll(".contact");
    main[0].classList.remove("highlight");
    menu[0].classList.remove("highlight");
    about[0].classList.remove("highlight");
    contact[0].classList.remove("highlight");
    element.classList.add("highlight");
  };

  return {
    myCreateElement,
    cleanContent,
    highlight,
  };
})();

export default helper;
