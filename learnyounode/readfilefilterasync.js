var fs=require("fs");
var file=process.argv[2];
var extension=process.argv[3];
var path=require("path");
fs.readdir(file,extension,function(err,list){
	if(err){
		return;
	}
	list=list.filter(function2);
	function function2(item){
		return (item.split('.'))[1]==extension ;
	}
	list.forEach(function4)
	function function4 (item){

	 console.log(item);
	}
	// filter function didnot work

	// list.forEach(function3);
	// function function3(item){
		// console.log(item.extname);
	// if(path.extname(item)=="."+extension)
	// 	console.log(item);
	// }

})