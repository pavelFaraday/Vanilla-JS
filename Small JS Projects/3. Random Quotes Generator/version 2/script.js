var quotes = [
    {
        "Quote":'ის გამოხვალ, რისიც გჯერა.',
        "Author": 'Coco Chanel'
    },
	{
        "Quote":'ყველაფერი, რაც გინდოდა შიშის მეორე მხარესაა = ყველაფერი შეუძლებლად გეჩვენება, სანამ არ გააკეთებ.',
        "Author": 'Shota rustveli'
    },
    {
        "Quote":'ვიღაცა დღეს ჩრდილშია, რადგან დიდი ხნის წინათ ვიღაცამ ხე დარგო.',
        "Author": 'Miki Rurki'
    },
    {
        "Quote":'გამარჯობა ძვირფასო საქართველო!',
        "Author": 'Geony Palduchi'
    }
];

// variables
var btn = document.getElementById('btn');
var quote = document.getElementById('quote');
var author = document.getElementById('author');

// Event Listener
btn.addEventListener('click', getQuote);

function getQuote() {
    var number = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = '<span>"</span>' + quotes[number].Quote + '<span>"</span>';
    author.innerHTML = '<span>--</span>' + quotes[number].Author + '<span>--</span>';
}