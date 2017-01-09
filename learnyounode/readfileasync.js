var fs=require ("fs");
// fs.readFile(process.argv[2],function (err,data){
// 	if(err){
// 		// console.log("Error Encountered");
// 		return;
// 	}
// 	// console.log(data);
// 	var content=data.toString().split("\n").length-1;
//     console.log(content);
// 	return data;

// });
fs.readFile(process.argv[2],"utf8",function(err,data){
	if(err){
		return;
	}
	console.log(data.split("\n").length-1);
})
