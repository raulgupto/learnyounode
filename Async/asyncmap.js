var http=require("http");
var async=require("async");

async.map(process.argv.slice(2),function(item,callback){
	var str="";
	http.get(item,function(response){
		response.on("data",function(data){
			str=str+data.toString();

		}).on("end",function(){
			return callback("",str);
		})
		response.on("error",function(e){
			 return callback(e);
		})
	})

},function(err,data){
	if(err){
		console.log(err);
	}
	else{
		console.log(data);		
	}
})