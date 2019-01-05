var yelp = require('yelp-fusion');
var express = require("express");
var db = require("../models");
var router = express.Router();
 
var apikey="SKC3FBdjB3c37lTOaCt2aCSgVY2K4uOorn6hmBsujscoPq7KzQVf2FfZxqixbrXwKFDSYDqaks_o9PD2xP1E49yezugWyI2Gxn7ZQ-NgYWggKKl7ObSNuj2WX-EvXHYx"


router.get("/search",function(req,res)
{
    var client = yelp.client(apikey);
    //db.favourite.
})