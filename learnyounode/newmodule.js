var fs=require("fs");
var path=require("path");
// module.exports=function(file,extension,callback){
// 	fs.readdir(file,function(err,list){
// 		if (err){
// 		return;
// 	}
// 	list.forEach(function3);

// 	})
// }	
// var function3=function (item){
// 		if(path.extname(item)==="."+extension){
// 		console.log(item);
// 	 }
//     }
// module.exports =function(file,extension,callback){
// 	fs.readdir(file,function (err,list){
// 		if(err){
// 			return;
// 		}
		// list.forEach(function3);
		// function function3(item){
		// 	if(path.extname(item)==="."+extension0{
		// 		console.log(item);
		// 	})
		// }
	
// })
// function callback(err){
// 	if(err!=null){
// 	console.log("error");
//  }
// }
// module.exports=function (file,extension,callback){
// 	fs.readdir(file,function(err,list){
// 		if(err){
// 			return callback(err);
// 		}
// 		list.forEach(function3);
// 		function function3(item){
// 			if(path.extname(item)==="."+extension){
// 				console.log(item);
				
// 			}
// 		}
// 		callback();

// 	})
// }
module.exports=function(file,extension,callback){
	var a=new Array();
	fs.readdir(file,function(err,list){
		if(err)
			return callback(err);
		list.forEach(functionfilter);
		function functionfilter(item){
			if(path.extname(item)==="."+extension){
				a.push(item);
			}
		} 
		callback(null,a);
	})
}
