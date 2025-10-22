import { quotes } from "./quotesdb.js";

export function quoteFun(){
  const minId = 1;
  const maxId = quotes.length-1;
  let randomQuoteId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;
  console.log(randomQuoteId)

  const quoteQuote = document.querySelector('#quote-quote')
  const quoteAuthor = document.querySelector('#quote-author')

  quoteQuote.textContent = `${quotes[randomQuoteId].quote}`;
  quoteAuthor.textContent = `${quotes[randomQuoteId].author}`

  // const 
}
