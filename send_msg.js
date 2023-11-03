const puppeteer=require('puppeteer');
function send_msg(message) 
// 1msg=0.273$
    {
        const accountSid = "***************************";
        const authToken = "*****************************";
        const client = require('twilio')(accountSid, authToken);
        client.messages     
        .create({
                body: 'message',
                from: '*************',
                to: '**********'
                })
            .then(message => console.log(message.sid));
            
        
    }
    module.exports = send_msg;
