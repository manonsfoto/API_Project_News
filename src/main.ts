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
  cardBtn.textContent = `<a href="${card.url}">Zum Artikel</a>`;
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

function generateURL(
  inputTextValue: string,
  selectLangValue: string,
  selectSortValue: string
) {
  const searchInput = `q=${inputTextValue}`;
  const language = `&language=${selectLangValue}`;
  const sortBy = `&language=${selectLangValue}`;
  const resultURL = `${BASE_URL}${searchInput}${language}${sortBy}${apiKey}`;
  return resultURL;
}

btn?.addEventListener("click", () => {
  const inputTextValue = inputText.value.trim().toLocaleLowerCase();
  generateURL(inputTextValue);
  fetchAllCards(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=5cd22826af6d402a83a0b97ac6d771eb"
  );
});
