var express=require("express");
var cors=require("cors");
var bodyparser=require("body-parser");

var app=express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
var sharedObj = require('./connection');


app.post('/insertdata', function (req, res) {
   
	req.body.data.date=Date.now();
	console.log(req.body.data);
	 var dataObj = req.body.data;
    sharedObj.fnGetMongoCon(res, function (db) {
        var collection = db.collection('user');
        collection.insertOne(dataObj, function (e, r) {
            if (e) {
                res.send(e);
            } else {
                res.send(r);
            }
        })
    });

})

/*app.post('/login-check', function (req, res) {
    var userObj = req.body.data;
    sharedObj.fnGetMongoCon(res, function (db) {
        var collectin = db.collection('user');
        collectin.find(userObj).toArray(function (e, r) {
            if (e) {
                res.send(e);
            } else {
                res.send(r);
            }
        })
    })
})*/

app.get('/fetch',(req,res)=>
{
 
    var userObj = req.body.data;
    sharedObj.fnGetMongoCon(res, function (db) {
        var collectin = db.collection('user');
        collectin.find().toArray(function (e, r) {
            if (e) {
				console.log(e);
                res.send(e);
				
            } else {
				console.log(r);
                res.send(r);
				
            }
        })
    })
})



app.listen(8080);
console.log('server lsitening');