const quotes = [
    {
        quote:"We cannot solve problems with the kind of thinking we employed when we came up with them.",
        author:"Albert Einstein"
    },
    {
        quote:"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
        author:"Mark Twain"
    },
    {
        quote:"When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.",
        author:"Walter Anderson"
    },
    {
        quote:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author:"Winston S. Churchill"
    },
    {
        quote:"It is better to fail in originality than to succeed in imitation.",
        author:"Herman Melville"
    },
    {
        quote:"Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
        author:"John Wooden"
    },
    {
        quote:"Don’t let yesterday take up too much of today.",
        author:"Will Rogers"
    },
    {
        quote:"If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
        author:"Steve Jobs"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;