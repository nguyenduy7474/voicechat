var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');
let https = require("https");



exports.home = function(req, res) {
	let o = {
      format: "urls"
	};
	let bodyString = JSON.stringify(o);
	let options = {
	      host: "global.xirsys.net",
	      path: "/_turn/ninedone",
	      method: "PUT",
	      headers: {
	          "Authorization": "Basic " + Buffer.from("nguyenduy7474:6db0944a-b3c2-11ea-823d-0242ac150003").toString("base64"),
	          "Content-Type": "application/json",
	          "Content-Length": bodyString.length
	      }
	};
	let httpreq = https.request(options, function(httpres) {
	      let str = "";
	      httpres.on("data", function(data){ str += data; });
	      httpres.on("error", function(e){ console.log("error: ",e); });
	      httpres.on("end", function(){ 
	          console.log("ICE List: ", str);
	      });
	});
	httpreq.on("error", function(e){ console.log("request error: ",e); });
	httpreq.end();

	
	res.render('index.ejs', {
		error : req.flash("error"),
		success: req.flash("success"),
		session:req.session,
	
	 });
	 
}



    
