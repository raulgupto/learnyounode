var http=require("http");
var bl=require("bl");
var url1=process.argv[2];
var url2=process.argv[3];
var url3=process.argv[4];
//var wholedata=new bl(); no need to create this instead store in an array by passing data.toString in the array //client

var wholedata=new Array();

var str="";
http.get(url1,function(response){
	response.pipe(bl(function(err,data){
		if(err){
			return;
		}
		wholedata[0]=data.toString();
		response.on("end",function(){
			http.get(url2,function(response){
						response.pipe(bl(function(err,data){
				if(err){
					return;
				}
				wholedata[1]=data.toString();
					})
				)
				response.on("end",function(response){
					http.get(url1,function(response){
					response.pipe(bl(function(err,data){
						if(err){
							return;
						}
						wholedata[2]=data.toString();
				}))
					response.on("end",function(){
						wholedata.forEach(function(item){
							console.log(item);
						})
					})

	}))
})