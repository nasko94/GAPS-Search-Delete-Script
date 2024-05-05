function onOpen() {
    var ui = SpreadsheetApp.getUi();
    // Adds a custom menu to the Google Sheets UI
    ui.createMenu('Search and Delete')
        .addItem('Custom Search', 'searchAndDeleteRows')
        .addItem('Social Search', 'socialSearch')
        .addItem('Client Search', 'clientSearch')
        .addItem('No-Reply Search', 'noReplySearch')
        .addItem('All Search', 'allSearch')
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
        "nextdoor.com", "viber.com", "github.com", "linktr.ee"
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
        "infoplease.com", "citizendium.org", "yelp.com", "dnb.com", "chamberofcommerce.com",
        "kickstarter.com", "bbb.org"
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
  
  function clientSearch() {
      var clients = [
          "dianealber.com",
          "istrap.com.au",
          "chrisheria.com",
          "lushyintimates.com",
          "lacocoboutique.com",
          "cocoboutique.ie",
          "cocoboutique.com",
          "custompawjewelry.com",
          "mysa.wine",
          "mushroomdesign.com",
          "canadagrowsupplies.com",
          "quebeccannabisseeds.com",
          "torontocannabisseeds.com",
          "hypeseeds.com",
          "thinkmushrooms.ca",
          "gleebtm.com",
          "solcbd.com",
          "superbrandtools.com",
          "magicmen.com.au",
          "theanimecollective.com",
          "1st-art-gallery.com",
          "lynxshop.com",
          "everestplunge.co.nz",
          "innerwisdomstore.com",
          "pleafs.com",
          "crystalenergy.shop",
          "neonicons.com",
          "nimasound.com",
          "helpmedicalsupplies.com",
          "studio-makeup.com",
          "infantlock.com",
          "serenitycbd.com",
          "slaapondersterren.nl",
          "sculptneonsigns.com",
          "fruitsnrootzuk.com",
          "glacierfreshfilter.com",
          "famivita.com.br",
          "kanvaskingdomgallery.com",
          "bareluxeskincare.com",
          "bareluxe.ca",
          "bareluxeskincare.ca",
          "mrswordsmith.com",
          "thetrost.com",
          "maceoo.com",
          "pnuff.com",
          "orasamazingherbal.com",
          "myseoulbox.com",
          "schaaftools.com",
          "nutritionfaktory.com",
          "nourished3.com",
          "kultsnack.com",
          "sultanspalace.de",
          "luxarmy.store",
          "lyfefuel.com",
          "luckychick.com",
          "healiumhair.com",
          "earthsecret.com",
          "gopurebeauty.com",
          "basmalabeads.com",
          "beautyfixmedspa.com",
          "eracleaskincare.com",
          "ediblehealth.com",
          "theweebean.com",
          "1dropgallery.com",
          "planetofthevapes.com",
          "featherbaby.com",
          "getmindright.com",
          "decornation.in",
          "alphabetforhumanity.com",
          "bigmoods.com",
          "bonneetfilou.com",
          "materiae.com",
          "hydratem8.com",
          "docmillersports.com",
          "greentechpackaging.com",
          "jaezhane.com",
          "mywellnesstar.com",
          "nikis.com",
          "ionskincare.com"
      ];    
    
      var ui = SpreadsheetApp.getUi();
      var message = "You are about to search for the following clients:\n\n" + clients.join("\n");
      
      ui.alert(message);
      processSearch(clients);
    }
  
    function noReplySearch() {
        var noreply = [
            "noreply", "no-reply", "reply"
        ];    
      
        var ui = SpreadsheetApp.getUi();
        var message = "You are about to search for no-reply emails";
        
        ui.alert(message);
        processSearch(noreply);
      }
    
    function allSearch() {       
        var ui = SpreadsheetApp.getUi();
        var message = "You are about to search for both social and client websites:\n\n" + clients.join("\n");
        
        ui.alert(message);
        clientSearch();
        socialSearch();
        noReplySearch();
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
  
