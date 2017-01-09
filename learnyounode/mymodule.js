// var file=process.argv[2];
// var extension=process.argv[3];
// var newmodule=require("./newmodule");
// var mynewmodule=newmodule(file,extension);
var file=process.argv[2];
var extension=process.argv[3];
var newmodule=require("./newmodule");
var mynewmodule=newmodule(file,extension,function(err,data){
	if(err){
		console.log("Error encountered"+err);
	}
	data.forEach(function(item){
		console.log(item);
	})
   

})