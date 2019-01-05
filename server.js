var express=require("express");
var path=require("path");
var db=require("./models");
var PORT=process.env.PORT ||8080;

var app=express();

app.use(express.static("public"));
db.sequelize.sync({force:true}).then(function(){
    app.listen(PORT,function(){
      // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);   
    });
})
