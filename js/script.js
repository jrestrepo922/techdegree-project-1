/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'Most people think buying is investing, but they’re wrong. Buying doesn’t make you an investor any more than buying groceries makes you a chef.',
    source: 'Gary Keller',
    citation: 'The Millionaire Real Estate Investor',
    year:'2005',
    tags:'#Real Estate',
    page:'130'
  },

  {
    quote: 'All great achievements are the result of sustained focus over time—all of them.',
    source: 'Gary Keller',
    citation: 'The Millionaire Real Estate Investor',
    year:'2005',
    tags:'#Real Estate',
    page:'140'
  },

  {
    quote: 'Deals aren’t found. Opportunities are found. Deals are made.',
    source: 'Gary Keller',
    citation: 'The Millionaire Real Estate Investor',
    year:'2005',
    tags:'#Real Estate',
    page:'150'
  },

  {
    quote: 'MEN OF ACTION ARE FAVORED BY THE GODDESS OF GOOD LUCK',
    source: 'George Clason',
    citation: 'The Richest Man in Babylon',
  },

  {
    quote: 'Where the determination is, the way can be found.',
    source: 'George Clason',
    citation: 'The Richest Man in Babylon',
  }
]



/***
 * `getRandomQuote` function
***/
function getRandomQuote(quoteArr){
  const randomNumber = Math.floor(Math.random() * quoteArr.length)
  return quoteArr[randomNumber];
}




/***
 * `printQuote` function
***/
function printQuote(){
  // radomQuote holds a single random quote
  const randomQuote = getRandomQuote(quotes);
  let html = `
                <p class="quote">${randomQuote.quote}</p>
                <p class="source" >${randomQuote.source}
                  
                `
  // checking to see witch properties the random quote has and it present add to the html var
  if(randomQuote.citation){
    html+= `<span class="citation">${randomQuote.citation},</span>`
  }
  if(randomQuote.year){
    html+= `<span class="year"> ${randomQuote.year},</span>`
  }
  if(randomQuote.tags){
    html+= `<span class="tags"> ${randomQuote.tags},</span>`
  }
  if(randomQuote.page){
    html+= `<span class="page"> ${randomQuote.page}</span>`
  }

  html+= `</p>`

  document.getElementById("quote-box").innerHTML = html;

}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);