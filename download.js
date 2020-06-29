const {Builder} = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const options = new firefox.Options();

options.setPreference("browser.download.dir","C:\\mySeleniumDownloads");
options.setPreference("browser.download.folderList",2);
options.setPreference("browser.helperApps.neverAsk.saveToDisk","application/x-csv");


const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();

driver.get("http://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv");