import { IArticles } from "./interfaces/INews";

let cardsArr: IArticles[] = [];

export function fetchAllCards(url: string) {
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
