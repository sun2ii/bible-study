// utils/index.js
const stopword = require('stopword');

// Function to perform word frequency analysis
function analyzeText(text) {
  const words = text.match(/\b\w+\b/g);
  const filteredWords = stopword.removeStopwords(words.map(word => word.toLowerCase()));

  // Remove numbers and words with 3 or fewer characters
  const wordsWithoutNumbers = filteredWords.filter(word => isNaN(word) && word.length > 3 && word !== 'john');

  const wordFreq = {};

  wordsWithoutNumbers.forEach(word => {
    wordFreq[word] = (wordFreq[word] || 0) + 1;
  });

  const sortedWordFreq = Object.entries(wordFreq).sort(([, a], [, b]) => b - a).slice(0, 20);
  console.log("Top 20 most common words:");
  sortedWordFreq.forEach(([word, freq]) => {
    console.log(`${word}: ${freq}`);
  });

  return sortedWordFreq;
}

module.exports = analyzeText;