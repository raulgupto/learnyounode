/**
 * Created by Rahul Gupta on 13-01-2017.
 */
var express=require("express"),bodyParser = require('body-parser');;
var mysql=require("mysql");

var app=express();
var user={
    userId:""
};
var userId="";
var body={};
var connection=mysql.createConnection({
    host:               "localhost",
    user:               "root",
    password:           "",
    database:           "tweet"
});
app.use(bodyParser.json());
app.post("/fetchdata/",function (req,res) {
    // userId=req.params.userid;
    userId=req.body.userId;

    connection.query("select tweet from `tb_tweet` where userid = '\""+userId+"\"'",function (err,sqlresponse) {
        if(err){
           return res.sendStatus(403);
        }
        else {
          // console.log(sqlresponse);
            user["userId"] = sqlresponse;
            res.send(user);
        }
    })

})
app.listen(3000);