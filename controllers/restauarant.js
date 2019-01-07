var express = require("express");
var db = require("../models");
var router = express.Router();

// var keys = require("./keys.js");
var yelp = require('yelp-fusion');
var client = yelp.client(process.env.YELP_API_KEY);
require("dotenv").config();

router.get("/search", function (req, res) {

    db.Favourite.findAll({}).then(function (data) {
        res.json(data);
    })
});

router.post("/search", function (req, res) {
    //var searchlocation = req.body;
        client.search({
            location: "San Diego"
        }).then(function (res) {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })

   
        
});

module.exports=router;