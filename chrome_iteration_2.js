debugger

const {Builder, By, Capabilities, Actions, Origin } = require("selenium-webdriver");

var chromeCapabilities = Capabilities.chrome();
//setting chrome options to start the browser fully maximized
var chromeOptions = {
    'args': ['--test-type', '--start-maximized']
};
chromeCapabilities.set('chromeOptions', chromeOptions);
let driver = new Builder().withCapabilities(chromeCapabilities).build();


const url1 = "///C:/tests/demos/selectmenu/index.html";

//const actions = driver.actions({bridge: true});
const actions = driver.actions({async:true});


async function iterateMenu(){

    try{

        await driver.get(url1);
        await driver.findElement(By.id("speed-button")).click();
        let cols = await driver.findElements(By.xpath("//ul[@id='speed-menu']/li"));

        var list1 = [];
        var e1_prev = cols[0];

        for (i=0; i < cols.length; i++){

            console.log(i);
            e1 = cols[i];
                    
            await actions.move({duration:100,origin:e1}).perform();
                        
            let t1 = await e1.getText();
            list1.push(t1);
            console.log(t1);

            e1_prev = e1;

        }

        await new Promise(r => setTimeout(r, 5000));

    } catch (error){
        console.log(error);
    } finally {
        driver.close();
    }

}

iterateMenu();
