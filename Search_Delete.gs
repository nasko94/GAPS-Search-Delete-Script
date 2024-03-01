function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Adds a custom menu to the Google Sheets UI
  ui.createMenu('Search and Delete')
      .addItem('Custom Search', 'searchAndDeleteRows')
      .addItem('Social Search', 'socialSearch')
      .addToUi();
}

function searchAndDeleteRows() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ui = SpreadsheetApp.getUi();
  
  // Prompt the user for input
  var response = ui.prompt('Enter keywords separated by a comma', ui.ButtonSet.OK_CANCEL);
  
  // Proceed only if OK is clicked
  if (response.getSelectedButton() == ui.Button.OK) {
    var keywords = response.getResponseText().split(',').map(function(s) { return s.trim().toLowerCase(); });
    processSearch(keywords);
  } else {
    ui.alert('Operation cancelled.');
  }
}

function socialSearch() {
  var categories = {
    "Social Media": [
      "facebook.com", "youtube.com", "whatsapp.com", "instagram.com", 
      "messenger.com", "wechat.com", "tiktok.com", "snapchat.com", 
      "telegram.org", "twitter.com", "pinterest.com", "linkedin.com", 
      "qq.com", "tumblr.com", "reddit.com", "quora.com", 
      "discord.com", "twitch.tv", "clubhouse.com", "mastodon.social",
      "vimeo.com", "flickr.com", "soundcloud.com", "goodreads.com", 
      "strava.com", "medium.com", "behance.net", "dribbble.com", 
      "nextdoor.com", "viber.com"
    ],
    "E-commerce": [
      "etsy", "amazon", "walmart.com", "target.com", "aliexpress.com", 
      "overstock.com", "newegg.com", "craigslist.org", "bonanza.com", 
      "gumtree.com", "mercadolibre.com", "rakuten.com", "temu.com",
      "artfire.com", "zibbet.com", "bigcartel.com", "storenvy.com", "magento.com",
      "wayfair.com", "jd.com", "flipkart.com", "asos.com", "zalando.com"
    ],
    "Information/Knowledge Platforms": [
      "wikipedia.org", "britannica.com", "wiktionary.org", "scholarpedia.org", 
      "infoplease.com", "citizendium.org"
    ],
    "Others (Media Sharing, Blogging, etc.)": [
      "vimeo.com", "flickr.com", "medium.com", "blogger.com", "archive.org",
      "coursera.org"
    ]
  };


  var ui = SpreadsheetApp.getUi();
  var message = "You are about to search for:\n";

  for (var category in categories) {
    message += "\n" + category + ":\n" + categories[category].join("\n") + "\n";
  }

  ui.alert(message);

  var allKeywords = [].concat.apply([], Object.values(categories));
  processSearch(allKeywords);
}


function processSearch(keywords) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var deletedRows = 0;
  
  // Iterate over the rows in reverse order
  for (var i = data.length - 1; i >= 0; i--) {
    var row = data[i];
    var rowContainsKeyword = keywords.some(function(keyword) {
      return row.some(function(cell) {
        return cell.toString().toLowerCase().includes(keyword);
      });
    });
    
    // If the row contains any of the keywords, delete it
    if (rowContainsKeyword) {
      sheet.deleteRow(i + 1);
      deletedRows++;
    }
  }
  
  var ui = SpreadsheetApp.getUi();
  ui.alert('Search and delete operation completed. ' + deletedRows + ' rows were deleted.');
}
