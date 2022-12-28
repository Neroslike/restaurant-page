import helper from "./helper";
import "../styles/aboutContact.css";

let about = () => {
  let content = document.querySelector("#content");
  let container = helper.myCreateElement("div", "", "container");
  let header = helper.myCreateElement("h1", "About us", "header");
  let about = helper.myCreateElement(
    "p",
    "Welcome to Marico’s! We are a cafe and pastry shop located in the heart of Amsterdam. At Marico’s, we are passionate about creating delicious and indulgent treats that bring joy to the senses. Our menu features a wide selection of sweet and savory pastries, as well as a variety of coffee and other beverages. From flaky croissants to creamy lattes, we have something to satisfy every craving. All of our pastries are made fresh daily with the finest ingredients, and we pride ourselves on the quality and artistry of our creations. Our team of skilled bakers and baristas are dedicated to providing a warm and welcoming atmosphere, where you can relax and enjoy our treats in comfort. Thank you for choosing Marico’s. We hope you have a delightful experience with us and look forward to serving you again soon!",
    "about"
  );

  container.append(about);
  content.append(header);
  content.append(container);
};

export default about;
