const fs = require('fs');
const path = require('path');

// Function to convert text to lowercase and save it to a new file
function convertToLowerCase(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }

    // Convert the text to lowercase
    const lowerCaseText = data.toLowerCase();

    // Create a new file path for the lowercase text
    const newFilePath = path.join(
      path.dirname(filePath),
      `${path.basename(filePath, path.extname(filePath))}_lowercase${path.extname(filePath)}`
    );

    // Write the lowercase text to the new file
    fs.writeFile(newFilePath, lowerCaseText, 'utf8', err => {
      if (err) {
        console.error(`Error writing file: ${err}`);
        return;
      }

      console.log(`File has been converted to lowercase and saved as ${newFilePath}`);
    });
  });
}

// Main function to execute the script
function main() {
  const filePath = '../../bible/amp.txt'

  if (fs.existsSync(filePath)) {
    convertToLowerCase(filePath);
  } else {
    console.error(`The file ${filePath} does not exist.`);
  }
}

main();
