import "./style.css";
import { INews, IArticles, ISource } from "./interfaces/INews";

const BASE_URL = `https://newsapi.org/v2/everything?`;
const EVERYTHING_URL = `${BASE_URL}domains=wsj.com&apiKey=7db2c104c64a4d9f99dde5456344d6b0`;

const inputText = document.getElementById('inputText') as HTMLInputElement;
const selectLang = document.getElementById('selectLang') as HTMLSelectElement;
const selectSort = document.getElementById('selectSort') as HTMLSelectElement;
const btn = document.querySelector('button') as HTMLButtonElement;
const cardsWrapper = document.getElementById('cardsWrapper') as HTMLDivElement;

function showCards(cards: INews[]) {
    cardsWrapper.innerHTML = "";

    cards.forEach((card: INews) => {
        console.log(card);
        cardsWrapper.appendChild(createCardElement(card))
    })
}

function createCardElement(card: INews): HTMLElement{
    const div = document.querySelector('div') as HTMLDivElement;
    console.log(div);
    
}

function fetchList() {}
