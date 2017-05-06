var mod = (function() {
  var newQuoteBtn = document.querySelector('.newQuote');

  function generateQuote() {
    var num       = randomNumberGenerator(quotes); // found in quotes.js
    var quote     = quotes[num].quote; // bug present in one of the quotes
    var character = quotes[num].character;
    var film      = quotes[num].film;
    return adjustHTML(quote, character, film);
  }

  function adjustHTML(quote, character, film) {
    var quoteEl       = document.querySelector('.quote');
    var characterEl   = document.querySelector('.character');
    var filmEl        = document.querySelector('.film');

    quoteEl.textContent = quote;
    characterEl.textContent = character;
    filmEl.textContent = film;
  }

  function randomNumberGenerator(arr = []) {
    var randomNum = Math.floor(Math.random() * arr.length);
    return randomNum;
  }

  return {
    foo: function() {
      return generateQuote();
    },
    publicEventListener() {
      return newQuoteBtn.addEventListener('click', generateQuote);
    }
  }
})();

window.addEventListener('load', mod.foo);
mod.publicEventListener();
