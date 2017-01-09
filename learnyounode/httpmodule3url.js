var http=require("http");
//var bl=require("bl");
var url1=process.argv[2];
var url2=process.argv[3];
var url3=process.argv[4];
//var wholedata=new bl();
var wholedata=new Array();
var str="";

http.get(url1,function(response){
	response.setEncoding("utf8");
	response.on("data",function(data){
		//wholedata.append(data);
		wholedata.push(data);
	}).on("end",function(){
		//console.log(wholedata.toString());
		wholedata.forEach(function(item){
			str=str+item;
		})
		console.log(str);
		str="";
		
		wholedata.splice(0,wholedata.length);

		http.get(url2,function(response){
		response.setEncoding("utf8");
		response.on("data",function(data2){
		//wholedata.append(data2);
		wholedata.push(data2);
		
	}).on("end",function(){
		//console.log(wholedata.toString());
	    wholedata.forEach(function(item){
			str=str+item;
		})
		console.log(str);
		str="";
		
		wholedata.splice(0,wholedata.length);
	    
		http.get(url3,function(response){
			response.setEncoding("utf8");
			response.on("data",function(data3){
				//wholedata.append(data3);
				wholedata.push(data3);
			}).on("end",function(){
					//console.log(wholedata.toString());
					wholedata.forEach(function(item){
				str=str+item;
			})
			console.log(str);
			str="";
			
			wholedata.splice(0,wholedata.length);

			})
		})
	})
	})

 })
})