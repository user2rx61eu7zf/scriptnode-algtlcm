PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
const puppeteer = require('puppeteer');
const sleep = require('./sleep.js');
const send_msg = require('./send_msg.js');
const test = require('./test.js');
const { set } = require('lodash');
const cron = require('cron');

test();
console.log("date de l'exec", new Date());
const job = new cron.CronJob('05 19 * * *', test);
job.start();