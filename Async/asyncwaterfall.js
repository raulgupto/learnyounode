var async=require("async");
var fs=require("fs");
var path =process.argv[2];
var http=require("http");



async.waterfall([funct1,funct2],function(err,data){
	if(err){
		console.log("Error");
	}
	else
		console.log(data);
})
function funct1(callback){
	var err="Error";
	fs.readFile(path,"utf8",function(err,data){
		if(err){
			console.log("error");
			callback(err);
		}
		else
		{
			//console.log(data.toString());
			callback("",data);
		}
	})
}
function funct2(data,callback){
	var str="";
	if(data!=="Error"){
		http.get(data,function(response){
			response.on("data",function(details){
				//console.log(details.toString());
				str=str+details.toString();
				//console.log(str);
			})
			response.on("end",function(){
			console.log(str);
			})
			response.on("error",function(){
			callback("Error");
		})
		});

	}
	else
		return callback("err");
}
