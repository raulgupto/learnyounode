 var express=require("express");

 var app=express();
 app.use(express.static('a.html'));
 app.listen(3000);