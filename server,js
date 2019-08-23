var express = require("express");
var app = express();
var server = require("http").createServer(app);
var os = require("os");
var bodyParser = require('body-parser');
var XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;
var rp = require('request-promise');
var fs = require('fs') 
var limit=0;
var arr = {};


const PORT = process.env.PORT || 5000;

var HostAddress = os.hostname();
console.log("============ Starting server ============");
console.log("Waiting for Incoming connections on "+HostAddress+":" + PORT);
console.log("--------------------------------------------------");
clearLog();
server.listen(PORT);
app.use(express.static(__dirname+ "js"));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({		extended: true		}));

app.post("/", async function(req,res){
	


	console.log(req.body);
	var data = req.body;
	res.json(await type(data.type,data));
	res.end();
});


async function type(type,content)
{
	switch(type.toLowerCase()){
		case "generate":{
				var pin = generatePin(content.ClientID);

				console.log("Pin generated: "+ pin)

				var result = await sendOTP(content.ClientID,pin);
				console.log(result);

	if(result.status == "success"){
		return ({ "Success":"true"})
	}else{
		return({ "Success":"false","message":"something went wrong"})
	}
				break;
		}
		case "validate":{
				console.log("Pin Entered: "+ content.pin);
				var result=validate(content.ClientID,content.pin);
				if(result == "success"){
					return ({ "ClientID" : content.ClientID,"Success":"true","message":"Correct OTP"})
				}else{
					return({"ClientID" : content.ClientID, "Success":"false","message":"Incorrect OTP or no OTP created"})
				}
			break;
		}
		default:{
			throw '{ "status": 400, "message":"Invalid Notification Type"}'
		}
	}

}

function generatePin(clientID)
{
	// Declare a digits variable  
    // which stores all digits 
    var digits = '0123456789'; 
    let OTP = ''; 
    for (let i = 0; i < 4; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    } 
     limit=limit+1;

     arr[clientID]=OTP;
   addLog(clientID,OTP);
   
    
    return OTP; 

}
function validate(ID,pin)
{
	if(arr[ID]==pin)
	{
			arr[ID]=null;
			console.log(arr);
			return "success";

	}else
	{
		return "failed";
	}
}

	

    	

async function sendLog()
{
	var contents = fs.readFileSync('auditLog.txt', { 'encoding': 'utf8'});
	console.log(contents.toString());

	var postData=JSON.parse(contents);
var host= 'https://still-oasis-34724.herokuapp.com';
	//port: 80,
	var path= '/uploadLog';
	var options ={
		method :'POST',
		uri:host+path,
		body: postData,
		json: true

	};
	return await rp(options)
	.then(function (parseBody){
		
		return parseBody;
	})
	.catch(function(err)
	{
		console.log(err);

	});
	


}

function clearLog()
{
	var data = '{ "logs":[';

	fs.writeFile('auditLog.txt', data.toString(), (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err;
    console.log("auditLog successfully created.") ;
}) 
	limit=0;
	return;
}

function addLog(ID,pin)
{
	if(ID==null)
	{
		return "failed missing arguement 'client_id'";
	}
	if(pin==null)
	{
		return "failed missing arguement 'pin'";
	}
	var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime =  date+' '+time;
        var data = '{"ClientID" : '+'"'+ID+'"'+',"pin" : '+'"'+pin+'"'+',"success" : '+'"true",' +'"timestamp": '+'"'+dateTime
        +'"'+'}';
	console.log(data);


	if(limit<5){
	// append data to file
fs.appendFile('auditLog.txt',data.toString()+',', 'utf8',
    // callback function
    function(err) { 
        if (err) throw err;
        // if no error
        console.log("Data is appended to log successfully.");
        return;
});

	}	


	else
	{
		
	var ender='], "system": '+'"otp"}';
	// append data to file
	fs.appendFile('auditLog.txt',data+ender, 'utf8',
    // callback function
    function(err) { 
        if (err) throw err;
        // if no error
        console.log("Data is appended to log successfully. Data will now be sent over server");
        sendLog();
        clearLog();
});
		
		return;
	}

	

	


}

// function createLog()
// {
// 	let data = "{ 'logs':[";

// 	fs.writeFile('auditLog.txt', data, (err) => { 
      
//     // In case of a error throw err. 
//     if (err) throw err;
//     console.log("auditLog successfully created.") 
// }) 
// }

async function sendOTP (clientID, pin){
	var url = "http://merlotnotification.herokuapp.com/";//"ec2-35-174-115-93.compute-1.amazonaws.com:5000";
	var otp = {
		"ClientID" : clientID,
		"Type" : "OTP",
		"Content" : {
			"pin": pin
		}
	}
	var options ={
		method :'POST',
		uri:url,
		body: otp,
		json: true

	};
	return await rp(options)
	.then(function (parseBody){
		return parseBody;
	})
	.catch(function(err)
	{
		console.log(err);

	});
}

