// main_script.js
const fs = require('fs');
const analyzeText = require('./utils/index.js');
const askQuestion = require('./utils/readUserInput.js');

// Main function to execute the script
async function main() {
  let bookName;
  const validChoices = ['nasb', 'amp', 'asv'];
  
  while (!validChoices.includes(bookName)) {
    bookName = await askQuestion('Which translation book do you want to analyze? (nasb, amp, asv): ');
    if (!validChoices.includes(bookName)) {
      console.log('Invalid choice. Please choose one of the following: nasb, amp, or asv.');
    }
  }

  // Construct the file path based on user input
  const filePath = `../bible/${bookName}.txt`;
  console.log('filePath', filePath);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    const text = fs.readFileSync(filePath, 'utf8');

    if (text) {
      // Split the text into lines
      const lines = text.split('\n');

      // Filter lines that contain "-- John"
      const filteredLines = lines.filter(line => line.toLowerCase().includes('john'));

      // Join the filtered lines back into a single string
      const filteredText = filteredLines.join(' ');

      // Analyze the filtered text
      const wordFreq = analyzeText(filteredText);
      // Optionally, you can plot the results using a plotting library or other means
      // For simplicity, we'll just log the results to the console here
    } else {
      console.error('Failed to read the file.');
    }
  } else {
    console.error(`The file ${filePath} does not exist.`);
  }
}

main();