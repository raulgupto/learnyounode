var http=require("http");
var url =require ("url");

var port=process.argv[2];
var server=http.createServer(function(req,res){
	//console.log("ho");
	var result;
	var urlparsed=url.parse(req.url,true);
	var date=new Date(urlparsed.query.iso);

	if(req.method=="GET"){
		if(urlparsed.pathname=='/api/parsetime'){
			result=dateparse(date);

		}
		else if(urlparsed.pathname=="/api/unixtime")
			result = dateparseunix(date);
			
	}

	res.writeHead(200,{ 'Content-Type': 'application/json' });
	res.end(JSON.stringify(result));
	function dateparse(date){
    	return {
       "hour": date.getHours(),
       "minute": date.getMinutes(),
       "second": date.getSeconds()
     }
    }

    function dateparseunix(date){
     	return{
     		"unixtime":date.getTime()
     	}
     }

})
server.listen(port);
