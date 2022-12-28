import "../styles/menu.css";
import helper from "./helper";
import cake from "../assets/cake.jpg";
import croissant from "../assets/croissant.jpg";
import latte from "../assets/latte.jpg";
import chocolate from "../assets/chocolate.jpg";

const menu = () => {
  let bakery = [
    "Croissants",
    "Danishes",
    "Muffins",
    "Bagels",
    "Pastries",
    "Cakes",
    "Cookies",
    "Brownies",
    "Bars",
  ];
  let beverages = [
    "Coffe",
    "Tea",
    "Hot Chocolate",
    "Chai latte",
    "Smoothies",
    "Lemonade",
  ];
  let content = document.querySelector("#content");
  let menuContainer = helper.myCreateElement("div", "", "container");
  let highlightHeader = helper.myCreateElement("h1", "Highlights", "header");
  let highlightContainer = helper.myCreateElement("div", "", "container");
  let menuHeader = helper.myCreateElement("h1", "Full Menu", "header");
  let listContainer = helper.myCreateElement("div", "", "listContainer");

  const createList = (listName, array) => {
    let list = helper.myCreateElement("ul", listName, "list itemName");
    array.forEach((item) => {
      let food = helper.myCreateElement("li", item, "listItem");
      list.append(food);
    });

    listContainer.append(list);
  };

  const createItem = (itemName, itemDescription, itemPic) => {
    let itemContainer = helper.myCreateElement("div", "", "itemContainer");
    let descContainer = helper.myCreateElement("div", "", "descContainer");
    let imageContainer = helper.myCreateElement("div", "", "imageContainer");
    let name = helper.myCreateElement("h2", itemName, "itemName");
    let description = helper.myCreateElement(
      "p",
      itemDescription,
      "itemDescription"
    );
    let pic = document.createElement("img");
    pic.src = itemPic;
    pic.classList.add("itemPic");

    descContainer.append(name);
    descContainer.append(description);
    imageContainer.append(pic);
    itemContainer.append(descContainer);
    itemContainer.append(imageContainer);

    highlightContainer.append(itemContainer);
  };

  createItem(
    "Croissant",
    "Indulge in the finest croissants made with the highest-quality flour and butter. Flaky and buttery, they are a true indulgence for the senses.",
    croissant
  );
  createItem(
    "Hot Chocolate",
    "Experience velvety, indulgent hot chocolate made with the finest cocoa powder and milk. A comforting treat on a cold day, sure to warm you from the inside out.",
    chocolate
  );
  createItem(
    "Chocolate cake",
    "Indulge in the rich, moist goodness of our chocolate cake made with the finest cocoa and topped with creamy chocolate frosting. A decadent dessert that will satisfy any chocolate craving.",
    cake
  );
  createItem(
    "Coffe latte",
    "Savor the smooth, creamy goodness of our latte, made with the finest espresso and steamed milk. A rich and satisfying coffee experience that is perfect for any time of day.",
    latte
  );

  createList("Bakery", bakery);
  createList("Beverages", beverages);

  menuContainer.append(listContainer);

  content.append(highlightHeader);
  content.append(highlightContainer);
  content.append(menuHeader);
  content.append(menuContainer);
};

export default menu;
