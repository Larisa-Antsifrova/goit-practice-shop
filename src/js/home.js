import "../css/home.css";
import refs from "../js/refs.js";

const homeTitle = document.createElement("h2");
const { home } = refs;
const homeContent = document.createElement("p");
let content = "Here is the house of a dream of a mouse!";

homeTitle.textContent = "HOUSE-MOUSE";
homeContent.textContent = content;

home.append(homeTitle, homeContent);
