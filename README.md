## Overview

This Google Apps Script (GAPS) adds custom functionality to Google Sheets, allowing users to search for rows containing specific keywords or predefined categories (like social media or e-commerce sites) and delete them directly from the spreadsheet. The script introduces a custom menu titled 'Search and Delete' with options for a customizable keyword search or a preset social media search.

## Features

- **Custom Menu Integration**: Seamlessly integrates into the Google Sheets UI, adding a 'Search and Delete' menu for easy access.
- **Customizable Keyword Search**: Enables users to input their own search terms, offering flexibility for various use cases.
- **Preset Category Searches**: Comes with predefined keyword sets for quick searches within popular categories such as Social Media and E-commerce.
- **Automated Row Deletion**: Efficiently scans and deletes rows that match the search criteria, streamlining data clean-up tasks.
- **User-friendly Prompts and Alerts**: Utilizes Google Sheets' UI prompts and alerts to gather input and provide feedback on the operation's outcome.

## How It Works

1. **Menu Addition**: Upon opening the spreadsheet, the script adds a 'Search and Delete' menu with options for 'Custom Search' and 'Social Search'.
2. **Custom Search**: When selected, prompts the user to enter keywords separated by commas. The script then searches for and deletes rows containing any of these keywords.
3. **Social Search**: Initiates a search using a preset list of domains related to social media, e-commerce, and other categories, deleting matching rows.
4. **Deletion Feedback**: After processing, displays an alert indicating the number of rows deleted as a result of the search.

## Usage

1. **Open Script Editor**: In your Google Sheets document, go to `Extensions > Apps Script` to open the script editor.
2. **Paste the Script**: Copy the provided script into the script editor and save your changes.
3. **Reload the Sheet**: Close and reopen the Google Sheets document to see the 'Search and Delete' menu.
4. **Perform Searches**: Use the menu options to perform custom or preset searches and automatically delete matching rows.

## Customization

- **Modifying Categories**: Edit the `categories` object within the `socialSearch` function to update, add, or remove keyword sets based on your needs.
- **Adjusting Prompts**: Customize the prompts and alert messages in the script to tailor the user interface to your preferences or to provide more detailed instructions.

## Ethical Use

This script is designed to assist with data management tasks within Google Sheets. Users should ensure they have the right to modify and delete the data they are working with and should use this tool responsibly to avoid accidental data loss.

## Disclaimer

This script is provided as-is for educational and productivity-enhancing purposes. Users should thoroughly test the script on non-critical data and ensure they understand its effects before applying it to important documents.
