"use strict";
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Git Pull Setup
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
exports.__esModule = true;
var child_process_1 = require("child_process");
var prompt = require('prompt-sync')();
// Ask user whether to pull from Git
var pull_remote_repository = prompt('Do you want to pull from Git? (yes/no): ');
if (pull_remote_repository.toLowerCase() === 'yes' || pull_remote_repository.toLowerCase() === 'y') {
    console.log('Pulling latest changes from Git...');
    try {
        (0, child_process_1.execSync)('git fetch', { stdio: 'inherit' }); // Execute git fetch
        (0, child_process_1.execSync)('git pull', { stdio: 'inherit', timeout: 5000 }); // Execute git pull with timeout of 5s
        console.log('Pull successful!');
    }
    catch (err) {
        // If there's an error, log it and exit with an error code
        if (err.signal === 'SIGTERM') {
            console.error('Git pull timed out.');
        }
        else {
            console.error('Error pulling from Git:', err);
        }
        process.exit(1); // Exit with non-zero code to signal failure
    }
}
else {
    console.log('Skipping Git pull.');
}
/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
husky initialization
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
var fs = require("fs");
var path = require("path");
var source = path.join(__dirname, "..", ".husky", "pre-commit");
var destinationDir = path.join(__dirname, "..", ".husky", "_");
var destination = path.join(destinationDir, "pre-commit");
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
fs.readFile(source, "utf-8", function (readErr, data) {
    if (readErr) {
        console.error("Failed to read source file:", readErr);
        return;
    }
    else {
        // console.log(`sourceData :`, data);
    }
    fs.writeFile(destination, data.toString(), function (writeErr) {
        if (writeErr) {
            console.error("Failed to write to destination file:", writeErr);
        }
        else {
            // console.log('Data to be written in destination: ', data.toString());
            console.log("Successfully copied pre-commit hook to", destination);
        }
    });
});
