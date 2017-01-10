var async=require("async");
var fs=require("fs");
async.map(["./test.js","./javacheck.js"],fs.stats,function(err,data){
	if(err){
		console.log("Error");

	}
	else console.log(data);
})