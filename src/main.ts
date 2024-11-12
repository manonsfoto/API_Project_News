import "./style.css";
import { INews, IArticles, ISource } from "./interfaces/INews";

const BASE_URL = `https://newsapi.org/v2/everything?`;
const EVERYTHING_URL = `${BASE_URL}domains=wsj.com&apiKey=7db2c104c64a4d9f99dde5456344d6b0`;
const apiKey = "&apiKey=7db2c104c64a4d9f99dde5456344d6b0";
const inputText = document.getElementById("inputText") as HTMLInputElement;
const selectLang = document.getElementById("selectLang") as HTMLSelectElement;
const selectSort = document.getElementById("selectSort") as HTMLSelectElement;
const btn = document.querySelector("button") as HTMLButtonElement;
const cardsWrapper = document.getElementById("cardsWrapper") as HTMLDivElement;

let cardsArr: IArticles[] = [];

function showCards(cards: IArticles[]) {
  cardsWrapper.innerHTML = "";

  cards.forEach((card: IArticles) => {
    console.log(card);
    cardsWrapper.appendChild(createCardElement(card));
  });
}

function createCardElement(card: IArticles): HTMLElement {
  const div = document.querySelector("div") as HTMLDivElement;
  console.log(div);
}

function fetchAllCards(url: string) {
  fetch(url)
    .then((response: Response) => {
      if (!response.ok) {
        console.error("Response doesnt work");
      }
      return response.json();
    })
    .then((cards: IArticles[]) => {
      cardsArr = [...cards];
      showCards(cards);

      return cardsArr;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

function searchArticles() {
  const inputTextValue = inputText.value.trim().toLocaleLowerCase();
  const SEARCH_URL = `${BASE_URL}q=${inputTextValue}${apiKey}`;
}

// selectLang?.addEventListener("change", () => {
//   const selectLangValue = selectLang.value;
//   const LANG_URL = `${BASE_URL}q=${inputTextValue}${apiKey}`;
// });

// function generateURL() {
//   const resultURL = `${BASE_URL}q=${inputTextValue}${apiKey}`;
// }
