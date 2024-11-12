import "./style.css";
import { INews, IArticles, ISource } from "./interfaces/INews";

const inputText = document.getElementById("inputText") as HTMLInputElement;
const selectLang = document.getElementById("selectLang") as HTMLSelectElement;
const selectSort = document.getElementById("selectSort") as HTMLSelectElement;
const btn = document.querySelector("button") as HTMLButtonElement;
const cardsWrapper = document.getElementById("cardsWrapper") as HTMLDivElement;

let cardsArr: IArticles[] = [];

function showCards(cards: IArticles[]) {
  cardsWrapper.innerHTML = "";

  cards.forEach((card: IArticles) => {
    return cardsWrapper.appendChild(createCardElement(card));
  });
}

function createCardElement(card: IArticles): HTMLElement {
  const div = document.createElement("div") as HTMLDivElement;
  div.classList.add("card");

  const title = document.createElement("h2") as HTMLHeadElement;
  title.textContent = card.title;
  div.appendChild(title);

  const content = document.createElement("p") as HTMLParagraphElement;
  content.textContent = card.content;
  div.appendChild(content);

  const image = document.createElement("img") as HTMLImageElement;
  if (card.urlToImage) {
    image.src = card.urlToImage;
    image.alt = "News Image";
    div.appendChild(image);
  }
  const cardBtn = document.createElement("button") as HTMLButtonElement;
  cardBtn.innerHTML = `<a href="${card.url}">Zum Artikel</a>`;
  cardBtn.classList.add("cardBtn");
  div.appendChild(cardBtn);

  return div;
}

function fetchAllCards(url: string) {
  fetch(url)
    .then((response: Response) => {
      if (!response.ok) {
        console.error("Response doesnt work");
      }
      return response.json();
    })
    .then((news: INews) => {
      cardsArr = news.articles;
      showCards(cardsArr);
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

const BASE_URL = `https://newsapi.org/v2/everything?`;
const apiKey = "&apiKey=7db2c104c64a4d9f99dde5456344d6b0";
let selectLangValue = "";
let selectSortValue = "";

selectLang.addEventListener("change", () => {
  selectLangValue = "&language=" + selectLang.value;

  return selectLangValue;
});

selectSort.addEventListener("change", () => {
  selectSortValue = "&sortBy=" + selectSort.value;

  return selectSortValue;
});

function generateURL(inputTextValue: string) {
  console.log(selectLangValue, selectSortValue);

  const resultURL = `${BASE_URL}q=${inputTextValue}${selectLangValue}${selectSortValue}${apiKey}`;
  console.log(resultURL);

  return resultURL;
}

btn?.addEventListener("click", () => {
  const inputTextValue = inputText.value.trim().toLowerCase().replace(" ", "");

  fetchAllCards(generateURL(inputTextValue));
});
