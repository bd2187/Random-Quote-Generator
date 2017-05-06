var newQuoteBtn = document.querySelector('.newQuote');
newQuoteBtn.addEventListener('click', generateQuote);


function generateQuote() {
  var num       = randomNumberGenerator(quotes);
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
