var http=require("http");
var async=require("async");
var url1=process.argv[2];
var url2=process.argv[3];


async.series({requestOne: one,requestTwo:two},function(err,data){
	if(err){
		console.log("Error");

	}
	else
	{
		console.log(data);
	}
})
function one(callback){
	var err="Error";
	getRequest(url1,function(err,data){
		if(err){
			callback(err);
		}
		else{
			callback("",data);
		}
	});

}
function two(callback){
	var err="Error";
	getRequest(url2,function(err,data){
		if(err){
			callback(err);
		}
		else
			callback("",data);
	})

}
function getRequest(url,callback){
	var str="";
	var err="err";
	http.get(url,function(response){
		response.on("data",function(data){
		   str=str+data.toString();

		})
		//console.log(str); //str shows null value
		response.on("end",function(){

			callback("",str);
		})
		response.on("error",function(){
			callback(err);
		})
	})
}