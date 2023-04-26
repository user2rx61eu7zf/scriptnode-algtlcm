
const { delay } = require('lodash');
const puppeteer=require('puppeteer');
const { validateBody } = require('twilio/lib/webhooks/webhooks.js');
const send_msg = require('./send_msg.js');
const sleep = require('./sleep.js');
require('dotenv').config
const url1 = 'https://client.algerietelecom.dz/fr/login';
  
async function test () 
{
    const browser = await puppeteer.launch({
        headless: "new",
        args: [
          "--disable-setuid-sandbox",
          "--no-sandbox",
          "--single-process",
          "--no-zygote",
        ],
        executablePath:
          process.env.NODE_ENV === "production"
            ? process.env.PUPPETEER_EXECUTABLE_PATH
            : puppeteer.executablePath(),
      });
    const page = await browser.newPage();
    await page.goto('https://client.algerietelecom.dz/fr');
    await page.type('#nd',"046942110");
    await page.type('#password',"0121510848");
    await page.keyboard.press('Enter');
    await sleep(1);
    //tous ca psq des fois apres se connecter on tombe sur une page d'erreur (url1) et tant que on est pas sur le bon site (url2) on refait
    if(page.url() == url1){{
        do {
             await page.goto('https://client.algerietelecom.dz/fr');
             await page.waitForSelector('#nd');
             await page.type('#nd',"046942110");
             await page.type('#password',"0121510848");
             await page.keyboard.press('Enter');
        } while (page.url()==url1);}}
    await sleep(10);
    //trouver l'element de la div items vals div flex et le console log
    const n = await page.$("[class='items-vals div-flex']")
    const val = await (await n.getProperty('textContent')).jsonValue()
    console.log(val);//a ce stade on a toute la date ex:"10-03-2023 (1 Jour(s) )"
    // on prends que le chiffre de jours restant {0,1,2...}
    const text = val;
    const start = text.indexOf("(") + 1;
    const end = text.indexOf("Jour(s)");
    const nbr_jours_rest = text.substring(start, end).trim();
    console.log(nbr_jours_rest,"jours"); 
    if(nbr_jours_rest == 0){send_msg()}
    else{console.log("machi lyoum tekmel l'internet")};
    /*verification de si on on peut nselfou ou non
    await page.click("[class=btn-ars]");
    await sleep(5);
    await page.click("[class=\"btn-blue saut-haut-40\"]");
    await sleep(5);
    page.waitForSelector("h4.c-vert")
    const z = await page.$("[class='h4.c-vert']")
    const value = await (await z.getProperty('textContent')).jsonValue()
    await page.waitForNavigation();
    console.log(value);
    await sleep(10);*/
    
    
}
module.exports = test;


