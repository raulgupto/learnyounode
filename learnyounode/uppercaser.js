var http=require("http");
var map=require("through2-map");
var port=process.argv[2];
var server=http.createServer(function(req,res){
	if(req.method=='POST'){
	var src=req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
		// console.log(chunk);
	}));
	src.pipe(res);

    }
})
server.listen(port);
// req.pipe(map(function (chunk) {
//        return chunk.toString().toUpperCase()
//      })).pipe(res)
//     }