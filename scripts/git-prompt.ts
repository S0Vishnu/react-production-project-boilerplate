
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Git Pull Setup
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

import { execSync } from 'child_process';
const prompt = require('prompt-sync')();

// Ask user whether to pull from Git
const pull_remote_repository: string = prompt('Do you want to pull from Git? (yes/no): ');

if (pull_remote_repository.toLowerCase() === 'yes' || pull_remote_repository.toLowerCase() === 'y') {
  console.log('Pulling latest changes from Git...');
  try {
    execSync('git fetch', { stdio: 'inherit' });    // Execute git fetch
    execSync('git pull', { stdio: 'inherit', timeout: 5000 });    // Execute git pull with timeout of 5s
    console.log('Pull successful!');
  } catch (err: any) {
    // If there's an error, log it and exit with an error code
    if (err.signal === 'SIGTERM') {
      console.error('Git pull timed out.');
    } else {
      console.error('Error pulling from Git:', err);
    }
    process.exit(1);  // Exit with non-zero code to signal failure
  }
} else {
  console.log('Skipping Git pull.');
}


/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
husky initialization
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

import * as fs from "fs";
import * as path from "path";

const source = path.join(__dirname, "..", ".husky", "pre-commit");
const destinationDir = path.join(__dirname, "..", ".husky", "_");
const destination = path.join(destinationDir, "pre-commit");
console.log('source: ', source);
console.log('destination: ', destination);

// Verify if the source file exists
if (!fs.existsSync(source)) {
  console.error("Source file does not exist:", source);
  process.exit(1); // Exit with an error code
}

// Ensure the destination directory exists
if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
}

// Read and write the content manually
fs.readFile(source, "utf-8", (readErr, data) => {
  if (readErr) {
    console.error("Failed to read source file:", readErr);
    return;
  }
  else {
    // console.log(`sourceData :`, data);
  }

  fs.writeFile(destination, data.toString(), (writeErr) => {
    if (writeErr) {
      console.error("Failed to write to destination file:", writeErr);
    } else {
      // console.log('Data to be written in destination: ', data.toString());
      console.log("Successfully copied pre-commit hook to", destination);
    }
  });
});
