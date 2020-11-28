import "../css/contacts.css";
import a from "./refs.js";
const { contacts } = a;

const game = ["stone", "scissors", "paper"];

function createBtns(array) {
  return array.map((el) => {
    const btn = document.createElement("button");
    btn.textContent = el;
    btn.dataset.value = el;
    return btn;
  });
}

const buttons = createBtns(game);

contacts.append(...buttons);

function randomIndex(array) {
  const index = Math.round(Math.random() * (array.length - 1));
  return index;
}

randomIndex(game);

const p = document.createElement("p");
contacts.appendChild(p);
contacts.addEventListener("click", (e) => {
  p.textContent = myGame(e, game);
});

function myGame(e, game) {
  let user = e.target.dataset.value;
  console.log(user);

  let comp = game[randomIndex(game)];
  console.log(comp);
  if (user === comp) {
    return "TIE!";
  } else if (
    (user === "stone" && comp === "scissors") ||
    (user === "scissors" && comp === "paper") ||
    (user === "paper" && comp === "stone")
  ) {
    return "USER WON!";
  } else {
    return "COMPUTER WON!";
  }
}
