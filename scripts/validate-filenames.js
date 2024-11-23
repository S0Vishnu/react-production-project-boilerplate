"use strict";
exports.__esModule = true;
var glob = require("glob");
var path = require("path");
var fs = require("fs");
var prompt = require('prompt-sync')();
// Function to check if a filename is in camelCase
function isCamelCase(filename) {
    var camelCasePattern = /^[a-z]+([A-Z][a-z]*)*$/; // Regular expression to match camelCase pattern
    return camelCasePattern.test(filename);
}
// Function to convert a filename to camelCase
function toCamelCase(filename) {
    return filename
        .replace(/[_-]+(.)?/g, function (_, chr) { return (chr ? chr.toUpperCase() : ''); })
        .replace(/^[A-Z]/, function (firstChar) { return firstChar.toLowerCase(); }); // Ensure the first letter is lowercase
}
// Function to get all non-camelCase filenames in the specified directory
function getNonCamelCaseFiles(directory) {
    var files = glob.sync("".concat(directory, "/**/*.*")); // Get all files in the specified directory
    return files.filter(function (filePath) {
        var filename = path.basename(filePath, path.extname(filePath)); // Get the filename without the extension
        return !isCamelCase(filename); // Filter non-camelCase files
    });
}
// Function to prompt the user for renaming non-camelCase files or proceed automatically in non-interactive mode
function promptUserForRenaming(nonCamelCaseFiles) {
    if (process.stdout.isTTY) {
        // If running interactively, prompt the user
        var answer = prompt('Do you want to rename these files to camelCase? (yes/no): ');
        return answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y';
    }
    else {
        // If running in non-interactive mode, log default action and proceed without prompt
        console.log("Running in non-interactive mode. Defaulting to renaming files.");
        return true;
    }
}
// Function to rename files to camelCase
function renameFiles(nonCamelCaseFiles) {
    nonCamelCaseFiles.forEach(function (filePath) {
        var dir = path.dirname(filePath); // Get the directory path
        var ext = path.extname(filePath); // Get the file extension
        var oldFilename = path.basename(filePath, ext); // Get the filename without extension
        var newFilename = toCamelCase(oldFilename) + ext; // Convert to camelCase and add back the extension
        var newFilePath = path.join(dir, newFilename); // Generate the new file path
        try {
            fs.renameSync(filePath, newFilePath); // Rename the file
            console.log("\u2705 Renamed: ".concat(filePath, " -> ").concat(newFilePath));
        }
        catch (error) {
            console.error("\u274C Error renaming ".concat(filePath, ":"), error);
        }
    });
}
// Main function to execute the script
function main() {
    var directory = 'src'; // Specify your target directory
    var nonCamelCaseFiles = getNonCamelCaseFiles(directory); // Get non-camelCase files
    if (nonCamelCaseFiles.length > 0) {
        console.error('❌ The following files are not in camelCase:');
        nonCamelCaseFiles.forEach(function (file) { return console.error("- ".concat(file)); });
        // Prompt user for renaming in interactive mode or proceed automatically in non-interactive mode
        renameFiles(nonCamelCaseFiles);
    }
    else {
        console.log('✅ All filenames are in camelCase.');
    }
}
// Execute the main function
main();
