/**
 * Created by Rahul Gupta on 13-01-2017.
 */
var express=require("express"),
    bodyParser = require('body-parser'),
    async=require("async");

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

    var asyncTasks = [];
    var responseObj = {};

    asyncTasks.push(funct1.bind(null, responseObj));
    asyncTasks.push(funct2.bind(null, responseObj));


    async.series(asyncTasks,function(err,data){
        if(err){
            console.log(err);
            return err;
        }
       // console.log(data);
        var response = {
            tweetWithSt : responseObj.tweetWithSt,
            tweetWithThe: responseObj.tweetWithThe
        };
         res.send(response);
    })

})
function funct1(responseObj, callback) {
    connection.query("select tweet from `tb_tweet` where tweet like '\"%st\"' ", function (err, sqlresponse) {
        if (err) {
            return callback(err);
        }
        else {

            responseObj.tweetWithSt = sqlresponse;
          //  console.log(responseObj.tweetWithSt);
            callback();
        }
    })
}
    function funct2(responseObj,callback) {
        connection.query("select tweet from `tb_tweet` where tweet like '\"The%\"' ",function (err,sqlresponse) {
            if(err){
                return callback(err);
            }
            else {
                responseObj.tweetWithThe = sqlresponse;
            //    console.log(responseObj.tweetWithThe);
                callback();
            }
        })

}
app.listen(3000);