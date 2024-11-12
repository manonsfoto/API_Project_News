import "./style.css";
import { INews, IArticles, ISource } from "./interfaces/INews";

const BASE_URL = `https://newsapi.org/v2/everything?`;

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
    .then((cards: IArticles[]) => {
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

function generateURL(
  inputTextValue: string,
  selectLangValue: string = "",
  selectSortValue: string = ""
) {
  const searchInput = `q=${inputTextValue}`;
  const language = `&language=${selectLangValue}`;
  const sortBy = `&language=${selectLangValue}`;
  const resultURL = `${BASE_URL}q=${inputTextValue}${apiKey}`;
}
