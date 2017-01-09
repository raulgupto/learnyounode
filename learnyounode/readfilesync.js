var fs=require("fs");
// var data=fs.readFileSync(process.argv[2]);
// var content=data.toString().split('\n').length-1;
var data =fs.readFileSync(process.argv[2],'utf8').split('\n').length-1;
console.log(data);
//console.log(content);