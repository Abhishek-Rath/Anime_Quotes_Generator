const btn = document.querySelector('.btn');

const quotes = [
    "The world isn't perfect. But it's there for us, doing the best it can....that's what makes it so damn beautiful. ~ Roy Mustang (Full Metal Alchemist)",
    "People, who can’t throw something important away, can never hope to change anything. ~ Armin Arlert (Shingeki no Kyojin / Attack on Titan)",
    "Religion, ideology, resources, land, spite, love or just because… No matter how pathetic the reason, it’s enough to start war. War will never cease to exist… reasons can be thought up after the fact… Human nature pursues strife. ~ Pain (Naruto Shippuden)",
    "I'll solve equations with my right hand and write names with my left. I'll take a potato chip... and eat it! ~ Light Yagami (Death Note)",
    "Don’t worry about what other people think. Hold your head up high and plunge forward. ~ Deku (My Hero Academia)",
    "When a man learns to love, he must bear the risk of hatred.” – Madara Uchiha (Naruto Shippuden)",
    "In this world, wherever there is light – there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars, and hatred is born to protect love. ~ Madara Uchiha (Naruto Shippuden)",
    "Man seeks peace, yet at the same time yearning for war… Those are the two realms belonging solely to man. Thinking of peace whilst spilling blood is something that only humans could do. They’re two sides of the same coin… to protect something… another must be sacrificed. ~ Madara Uchiha (Naruto Shippuden)",
    "Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality only pain, suffering and futility exist. ~ Madara Uchiha (Naruto Shippuden)",
    "A person grows up when he’s able to overcome hardships. Protection is important, but there are some things that a person must learn on his own. ~ Jiraiya (Naruto Shippuden)",
    "When people get hurt, they learn to hate… When people hurt others, they become hated and racked with guilt. But knowing that pain allows people to be kind. Pain allows people to grow… and how you grow is up to you. ~ Jiraiya (Naruto Shippuden)",
    "Hard work is worthless for those that don’t believe in themselves. ~ Naruto Uzumaki",
    "If you don’t like your destiny, don’t accept it. Instead have the courage to change it the way you want it to be. ~ Naruto Uzumaki (Naruto)",
    "Your comrades are there to make up for what you cannot do and to prevent you from ignoring things that you actually might have been able to do. ~ Itachi Uchiha (Naruto Shippuden)",
    "Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain because life’s greatest lessons are learned through pain. ~ Pain (Naruto Shippuden)",
    "Knowledge and awareness are vague, and perhaps better called illusions. Everyone lives within their own subjective interpretation. ~ Itachi Uchiha",

] 
btn.addEventListener('click', displayQuote);

// function getRandomQuote() {
//     fetch('https://animechan.vercel.app/api/quotes')
//     .then(response => response.json())
//     .then(quotes => displayQuote)
// }

function displayQuote() {
    console.log(quotes)
    let quote = document.getElementById('quote');
    let index = Math.floor(Math.random() * quotes.length);
    let display_quote = 
    `<div class="card">
    <p>${quotes[index]}</p>
   </div>`
   quote.innerHTML = display_quote;
}

       