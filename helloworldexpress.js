var express=require("express");
var port=process.argv[2];
var app=express();
// app.get("/home",function(req,res){
//     var id=req.param('id');
//     var name=req.param('name');
// 	res.end("Hello "+name+" your id="+id);
// });
// app.param(["name","id"],function(req,res,next,value){
//     if (value!="Rahul"){
//         req.sendStatus(403);
//     }
//     req.name="Gupta"+value;
//     //req.id="Sid"+id;
// })
// app.get("/home/:name/:id",function (req,res,next){
//    res.send(req.params.name);
//    next();
// })
// app.param(function(param,option){
//     return function (req,res,next,value) {
//         if(value==option){
//
//             next();
//         }
//         else
//             res.sendStatus(403);
//
//     }
// })

// app.param("id",40);
// // app.put("/home/:name/:id",function(req,res){
// //     console.log("Put REq");
// //     res.send("Put request received");
// // })
// app.get("/home/:name/:id",function(req,res){
//
//    // console.log(req.signedCookies);
//     res.end(req.params.name+" "+req.params.id);
// })


//
// app.post("/",function(req,res){
//     res.send("Hello listening on 3000");
// })
app.get('/', function (req, res) {
    res.send('Welcome');
});
app.use(function(req, res, next) {
    res.send('Hello World');
});

// requests will never reach this route


app.listen(3000);