import { data } from "./data.js";
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");

export const getQuote = () => {
    data.forEach(() => {
        quote.textContent = `${data[0].text}`;
        author.textContent = `${data[0].author}`;
    });
    changeQuote.addEventListener("click", (e) => {
        e.preventDefault();
        let number = Math.random() * 2;
        let numberIndex = Math.round(number);
        console.log(numberIndex);
        data.forEach(() => {
            quote.textContent = `${data[numberIndex].text}`;
            author.textContent = `${data[numberIndex].author}`;
            console.log(numberIndex);
        });
    });
};

getQuote();
