'use strict';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code

  let wordCount = {}
  const words = phrase.split(' ');
  for (const word of words){
    if (wordCount.hasOwnProperty(word)){
      wordCount[word]  += 1;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount
}
// console.log(countWords("Marry had a little man had a little"))

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }; 

  if (!(melonPrices.hasOwnProperty(price))) {
    return 
  }
  return melonPrices[price].sort(); 


}
console.log(getMelonsAtPrice(3)) 