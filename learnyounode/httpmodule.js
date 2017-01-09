var http=require("http");
var bl=require("bl");
var site=process.argv[2];
var req=http.get(site,function(response){
	var datadetails=new bl();
	response.setEncoding("utf8");
	response.on("data",function(data){
		datadetails.append(data);

	}).on("end",function(){
		console.log(datadetails.length);
		console.log(datadetails.toString());
	})
	
});
req.on("error",function(err){
		if(err){
			console.log("Error");
		}
	});