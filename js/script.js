var mod = (function() {
  var quoteEl       = document.querySelector('.quote');
  var characterEl   = document.querySelector('.character');
  var filmEl        = document.querySelector('.film');
  var newQuoteBtn   = document.querySelector('.newQuote');
  var twitterBtn    = document.querySelector('.twitter');

  function generateQuote() {
    var num       = randomNumberGenerator(quotes); // found in quotes.js
    var quote     = quotes[num].quote; // bug present in one of the quotes
    var character = quotes[num].character;
    var film      = quotes[num].film;
    return adjustHTML(quote, character, film);
  }

  function randomNumberGenerator(arr = []) {
    var randomNum = Math.floor(Math.random() * arr.length);
    return randomNum;
  }

  function adjustHTML(quote, character, film) {
    quoteEl.textContent = quote;
    characterEl.textContent = character;
    filmEl.textContent = film;
  }

  function tweet() {
    return twitterBtn.setAttribute('href', `https://twitter.com/intent/tweet?text=${quoteEl.textContent} - ${characterEl.textContent}`);
  }

  return {
    foo: function() {
      return generateQuote();
    },
    publicQuoteGenerator() {
      return newQuoteBtn.addEventListener('click', generateQuote);
    },
    publicTweetGenerator() {
      twitterBtn.addEventListener('click', tweet);
    }

  }
})();

window.addEventListener('load', mod.foo);
mod.publicQuoteGenerator();
mod.publicTweetGenerator();
