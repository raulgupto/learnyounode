var async=require("async");
async.waterfall([func1,func2],function(err,data){
	if(err){
		console.log("Error"+data);

	}
	else console.log("Data"+":"+data);
})
function func1(callback){
	var dat=true;
	var err="";
	var name="RAHUL";
	if(dat){
		callback(null,name);
	}
	else{
		callback(err,"NOname");
	}
}
function func2(data,callback){
	if(false){
		console.log("insidefunction2 :"+data);
		callback(null,data);
	}
	else{
		console.log("insidefunction2 :"+data);
		callback("err","NOname");
	}
}
