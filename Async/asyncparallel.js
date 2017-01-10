var async=require("async");
var stack={};
stack.getA =function(callback){
	callback("","A");
}
stack.getB =function(callback){
	callback("","B");
}
stack.getC =function(callback){
	callback("","C");
}
async.parallel(stack,function(err,data){
	if (err){
		console.log(err);
	}
	else
		console.log(data);
})