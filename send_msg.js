const puppeteer=require('puppeteer');
function send_msg(message) 
// 1msg=0.273$
    {
        const accountSid = "AC0637184ea0c713f265f5bcdfa743caf5";
        const authToken = "ff67cf6e34a790885a825fddfbc8e9ba";
        const client = require('twilio')(accountSid, authToken);
        client.messages     
        .create({
                body: 'lyoum tekmel linternet',
                from: '+15674852650',
                to: '+213540958089'
                })
            .then(message => console.log(message.sid));
            
        
    }
    module.exports = send_msg;