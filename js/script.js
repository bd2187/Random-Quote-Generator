"use strict";

var quoteMod = (function(){
  var quoteEl       = document.querySelector('.quote');
  var characterEl   = document.querySelector('.character');
  var filmEl        = document.querySelector('.film');
  var newQuoteBtn   = document.querySelector('.newQuote');
  var twitterBtn    = document.querySelector('.twitter');

  var quoteObj = {
    generateQuote() { // invoke randomNumber() & adjustHTML()
      var num       = quoteObj.randomNumber(quotes); // found in quotes.js
      var quote     = quotes[num].quote;
      var character = quotes[num].character;
      var film      = quotes[num].film;
      quoteObj.adjustHTML(quote, character, film);
    },
    randomNumber(arr = []) { return Math.floor(Math.random() * arr.length); },
    adjustHTML(quote, character, film) {
      quoteEl.textContent = `"${quote}"`;
      characterEl.textContent = character;
      filmEl.textContent = film;
    },
    tweet() {
      return twitterBtn.setAttribute('href', `https://twitter.com/intent/tweet?text=${quoteEl.textContent} -${characterEl.textContent}`);
    },
    eventListeners() {
      twitterBtn.addEventListener('click', this.tweet);
      newQuoteBtn.addEventListener('click', this.generateQuote);
    }
  }

  quoteObj.eventListeners();
  quoteObj.generateQuote();
})();
