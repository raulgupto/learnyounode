/**
 * Created by Rahul Gupta on 12-01-2017.
 */
var twitter=require("twit");
var fs=require("fs");
var mysql=require("mysql");


var str="";
var params={
    screen_name:        "raulgupto"
}

var connection=mysql.createConnection({
    host:               "localhost",
    user:               "root",
    password:           "",
    database:           "tweet"
});


var user=new twitter({
    consumer_key:       'DQPnhJkqh65dTJIB6TTtgBtMA',
    consumer_secret:    'IoBJqWk768TJYx892xX6VY1eqL3gAnQdVPEVQ8OGG9KgNjoEmq',
    access_token:       '2956886265-o2XHmMCpOqeXFa35THnng5PCwm43r4F2Az2YzJg',
    access_token_secret:'siMqqt8WYAYydR4Wo5beKGC7PuwzcPt4VhYUnIJ5CiQUJ'
});
var post={
    tweetid: "",
    tweet: ""
};

user.get("statuses/user_timeline",params,function(err,tweet,response){
    if(err){
        console.log(err);
    }
        tweet.forEach(function(item){
            //console.log(item);
            Object.keys(item).forEach(function (key) {
                if(key=="id_str"){
                   // console.log(item[key]);
                    str=str+item[key].toString()+"\n";
                    post["tweetid"]=JSON.stringify(item[key]);
                }
                if(key=="text"){
                    str=str+item[key].toString()+"\n";
                   // console.log(item[key]);
                    //what if we write file here
                    post["tweet"]=JSON.stringify(item[key]);
                }

        })
            var query=connection.query("insert into tb_tweet set ?",post,function(err,result){
                if(err)
                    console.log(err);
            } );
            //console.log(query.sql);
            writeFile(str);

    })


})
function writeFile(respose) {
    fs.writeFile("data.txt",respose,function (err) {
        if(err){
            return console.log(err);
        }

    })
};





