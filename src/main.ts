import "./style.css";
import { fetchList } from "./function";

const inputText = document.getElementById("inputText") as HTMLInputElement;
const selectLang = document.getElementById("selectLang") as HTMLSelectElement;
const selectSort = document.getElementById("selectSort") as HTMLSelectElement;
const btn = document.querySelector("button") as HTMLButtonElement;
const cardsWrapper = document.getElementById("cardsWrapper") as HTMLDivElement;
