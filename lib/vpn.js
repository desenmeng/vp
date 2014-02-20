var request = require('request');
var cheerio = require('cheerio');
exports.vpnbook = function(){
    request('http://www.vpnbook.com/freevpn', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body);
            var pptp =  $('.disc')[0];
            console.log(pptp);
        }
        else{
            callback(error);
        }
    })
}