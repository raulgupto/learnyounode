var http=require("http");
// var url1=process.argv[2];
// var url2=process.argv[3];
var async=require("async");

async.each(process.argv.slice(2),function request(item,callback){
	http.get(item,function resp(response){
		response.on("data",function(data){
			console.log(data.toString());
		})
		response.on("end",function(){
			console.log("End");
			return callback();

		})
		response.on("error",function(e){
			callback(e);
		})
})

},function(err,data){
	if(err){
		console.log(err);
	}
	else
	{
		console.log("No error");
	}

})