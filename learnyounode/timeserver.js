var net=require("net");
var server =net.createServer(function(socket){
	var date=new Date();
	//console.log(date.getMonth());
	var str='';
	str=str+date.getFullYear()+"-";
	var buff=date.getMonth()+1;
	if(buff<10){
		str=str+"0"+buff+"-";
	}
	else str=str+buff+"-";
	var buff=date.getDate();
	if(buff<10){
		str=str+"0"+buff;
	}
	else str=str+buff;
	str=str+" ";
	buff=date.getHours();
	if(buff<10){
		str=str+"0"+buff;
	}
	else str=str+buff;
	str=str+":";
	buff=date.getMinutes();
	if(buff<10){
		str=str+"0"+buff;
	}
	else str=str+buff;
	// socket.write(str);
	// socket.write("\n");
	socket.end(str+"\n");
})

server.listen(process.argv[2]);
