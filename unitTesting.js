var expect = require('chai').expect;
var fs = require("fs");
var request = require("request");
var rp = require('request-promise');
var arr = {};
 
 var limit=0;


describe('unit testing', function () {
    it('Should compare login details of specified user with correct details', function () {
    var res = validate("tomLite123","AB123CDE");
      console.log("correct details");
      expect(res).to.equal("success");
      

    });
    it('Should compare login details of specified user with incorrect details', function () {
    var res = validate("tomLite123","null");
      console.log("Incorrect details");
      expect(res).to.equal("failed incorrect details");

    });
     it('Should compare number details of specified user with format', function () {
    var res = checkI("123658790");
      console.log("Correct format");
      expect(res).to.equal("Valid");

    });
      it('Should compare number details of specified user with format', function () {
    var res = checkI("asd456987a");
      console.log("Incorrect format contains non numeric valuse");
      expect(res).to.equal("Invalid");

    });

      it('Should compare length of employee ID', function () {
    var res = check("asd45698");
      console.log("Correct Length");
      expect(res).to.equal("Valid");

    });
      it('Should compare length of employee ID', function () {
    var res = check("456987a");
      console.log("Incorrect Length");
      expect(res).to.equal("Invalid");

    });
    
    
});

 function validate(name,pass)
{
  if(arr[name]==pass)
  {
     // arr[ID]=null;
      return "success";

  }else
  {
    return "failed incorrect details";
  }
}

function checkI(input)
{

var re = new RegExp("^([0-9]{5,})$");
if (re.test(input)) {
   return "Valid";
} else {
    return "Invalid";
}
}

function check(input)
{

var re = new RegExp("^([a-z0-9]{8})$");
if (re.test(input)) {
   return "Valid";
} else {
    return "Invalid";
}
}






// describe('Integration testing',function(){
// 	it("Sending an OTP notification",async function(){
// 		const res = makerequest(OTP);
// 		expect(res).to.equal("success");
// 	//	res = JSON.stringify(res);

// 		console.log("notifications test: "+res);
//    		// expect(res).to.equal(true);

// 	}); 
//    it('attempting to send log to reports', function () {
//     var res =  sendLog();
//     //console.log(JSON.stringify(res));
//     console.log("Logs successfully sent");


//       expect(res).to.equal(res);
//       //expect(rep).to.equal("success");

//     });	
// })

arr["tomLite123"]="AB123CDE";
 arr["JohnServer123"]="FG123HIJ";
 arr["LomGot1235"]="KL123MNO";
 arr["admin456"]="ADminTop1258";