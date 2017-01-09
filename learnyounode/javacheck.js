var arr=[1,2,3,4];
var array=[1,3,4,5];
var arrj=array.filter(function(arr){
	return array.indexOf(arr)!==-1;
});
console.log(arrj);
