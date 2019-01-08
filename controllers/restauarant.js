var express = require("express");
var db = require("../models");
var router = express.Router();

// var keys = require("./keys.js");
var yelp = require('yelp-fusion');
var client = yelp.client(process.env.YELP_API_KEY);

router.get("/search", function (req, res) {

    db.Favourite.findAll({}).then(function (data) {
        res.json(data);
    })
});

router.post("/search", function (req, res) {
    //var searchlocation = req.body;
    client.search({
        location: "San Diego"
    }).then(function (data) {
        // change the data in the callback to data instead of res
        // would be an issue with res being object
        res.json(data);
    }).catch(error => {
        console.log(error);
    });

   
        
});

module.exports=router;