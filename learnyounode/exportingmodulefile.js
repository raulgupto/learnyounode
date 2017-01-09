var fs=require("fs");
var path=require("path");

function readfilefilterasync(file,extension){
fs.readdir(file,extension,function(err,list){
	if (err){
		return;
	}
	list.forEach(function3);
	function function3(item){
		if(path.extname(item)==="."+extension){
		console.log(item);
	 }
    }
})
}
module.exports.readfilefilterasync=readfilefilterasync;
