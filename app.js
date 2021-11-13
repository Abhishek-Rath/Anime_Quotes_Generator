const btn = document.querySelector('.btn');

btn.addEventListener('click', getRandomQuote);

function getRandomQuote() {
    fetch('https://animechan.vercel.app/api/quotes')
    .then(response => response.json())
    // .then(quotes => displayQuote);
    .then(quotes => displayQuote)
}

function displayQuote() {
    let quote = document.getElementById('quote');
    let index = Math.floor(Math.random() * quotes.length);
    let display_quote = 
    `<div class="card">
    <p>${quotes[index]}</p>
   </div>`
   quote.innerHTML = display_quote;
}





       