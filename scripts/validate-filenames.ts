import * as glob from 'glob';
import * as path from 'path';
import * as fs from 'fs';
const prompt = require('prompt-sync')();

// Function to check if a filename is in camelCase
function isCamelCase(filename: string): boolean {
    const camelCasePattern = /^[a-z]+([A-Z][a-z]*)*$/; // Regular expression to match camelCase pattern
    return camelCasePattern.test(filename);
}

// Function to convert a filename to camelCase
function toCamelCase(filename: string): string {
    return filename
        .replace(/[_-]+(.)?/g, (_, chr) => (chr ? chr.toUpperCase() : ''))
        .replace(/^[A-Z]/, (firstChar) => firstChar.toLowerCase()); // Ensure the first letter is lowercase
}

// Function to get all non-camelCase filenames in the specified directory
function getNonCamelCaseFiles(directory: string): string[] {
    const files = glob.sync(`${directory}/**/*.*`); // Get all files in the specified directory
    return files.filter((filePath) => {
        const filename = path.basename(filePath, path.extname(filePath)); // Get the filename without the extension
        return !isCamelCase(filename); // Filter non-camelCase files
    });
}

// Function to prompt the user for renaming non-camelCase files or proceed automatically in non-interactive mode
function promptUserForRenaming(nonCamelCaseFiles: string[]): boolean {
    if (process.stdout.isTTY) {
        // If running interactively, prompt the user
        const answer: string = prompt('Do you want to rename these files to camelCase? (yes/no): ');
        return answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y';
    } else {
        // If running in non-interactive mode, log default action and proceed without prompt
        console.log("Running in non-interactive mode. Defaulting to renaming files.");
        return true;
    }
}

// Function to rename files to camelCase
function renameFiles(nonCamelCaseFiles: string[]): void {
    nonCamelCaseFiles.forEach((filePath) => {
        const dir = path.dirname(filePath); // Get the directory path
        const ext = path.extname(filePath); // Get the file extension
        const oldFilename = path.basename(filePath, ext); // Get the filename without extension
        const newFilename = toCamelCase(oldFilename) + ext; // Convert to camelCase and add back the extension
        const newFilePath = path.join(dir, newFilename); // Generate the new file path

        try {
            fs.renameSync(filePath, newFilePath); // Rename the file
            console.log(`✅ Renamed: ${filePath} -> ${newFilePath}`);
        } catch (error) {
            console.error(`❌ Error renaming ${filePath}:`, error);
        }
    });
}

// Main function to execute the script
function main(): void {
    const directory = 'src'; // Specify your target directory
    const nonCamelCaseFiles = getNonCamelCaseFiles(directory); // Get non-camelCase files

    if (nonCamelCaseFiles.length > 0) {
        console.error('❌ The following files are not in camelCase:');
        nonCamelCaseFiles.forEach((file) => console.error(`- ${file}`));

        // Prompt user for renaming in interactive mode or proceed automatically in non-interactive mode
        renameFiles(nonCamelCaseFiles);
    } else {
        console.log('✅ All filenames are in camelCase.');
    }
}

// Execute the main function
main();
