"use strict";

var mod = (function() {
  var quoteEl       = document.querySelector('.quote');
  var characterEl   = document.querySelector('.character');
  var filmEl        = document.querySelector('.film');
  var newQuoteBtn   = document.querySelector('.newQuote');
  var twitterBtn    = document.querySelector('.twitter');

  // invoke eventListeners
  newQuoteBtn.addEventListener('click', generateQuote);
  twitterBtn.addEventListener('click', tweet)

  // invokes randomNumberGenerator() & adjustHTML()
  function generateQuote() {
    // quotes object found in quotes.js
    var num = randomNumberGenerator(quotes);
    // ES6 Object destructuring:
    var { quote, character, film } = quotes[num];
    return adjustHTML(quote, character, film);
  }

  function randomNumberGenerator(arr = []) {
    var randomNum = Math.floor(Math.random() * arr.length);
    return randomNum;
  }

  function adjustHTML(quote, character, film) {
    quoteEl.textContent = `"${quote}"`;
    characterEl.textContent = character;
    filmEl.textContent = film;
  }

  function tweet() {
    return twitterBtn.setAttribute('href', `https://twitter.com/intent/tweet?text=${quoteEl.textContent} -${characterEl.textContent}`);
  }

  return {
    generateQuote: generateQuote
  }

})();

mod.generateQuote();
