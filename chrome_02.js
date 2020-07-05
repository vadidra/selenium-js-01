const {Builder, By, Capabilities } = require("selenium-webdriver");

var chromeCapabilities = Capabilities.chrome();
//setting chrome options to start the browser fully maximized
var chromeOptions = {
    'args': ['--test-type', '--start-maximized']
};
chromeCapabilities.set('chromeOptions', chromeOptions);
var driver = new Builder().withCapabilities(chromeCapabilities).build();


async function simpleRegistration(){

    try{

        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");

        await driver.findElement(By.name("email")).sendKeys("example@gmail.com");
        await driver.findElement(By.id("password")).sendKeys("12345");
        await driver.findElement(By.name("submit")).click();

    } catch (error){
        console.log(error);
    } finally {
        driver.close();
    }

}

simpleRegistration();
