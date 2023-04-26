const puppeteer=require('puppeteer');
function send_msg(message) 
// 1msg=0.273$
    {
        const accountSid = "AC0637184ea0c713f265f5bcdfa743caf5";
        const authToken = "0d7262d942868c2bb8dc60073f254166";
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