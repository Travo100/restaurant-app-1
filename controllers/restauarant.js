var yelp = require('yelp-fusion');
var express = require("express");
var db = require("../models");
var router = express.Router();
// var keys = require("./keys.js");
var client = yelp.client(process.env.YELP_API_KEY);
require("dotenv").config();

router.get("/search/favourites",function(req,res)
{
    
    db.Favourite.findAll({}).then(function(data)
    {
        res.json(data);
    })
});

router.post("/search",function(req,res)
{
    
    db.Favourite.create({

       
        // client.search({
        //     location: 'San Diego'
        //   }).then(res => {
        //     console.log(res.jsonBody.businesses);
        //   }).catch(e => {
        //     console.log(e);
        //   })

        // });   
});