module.exports=function(sequelize,DataTypes)
{
    var Favourite=sequelize.define("Favourite",{
     name:DataTypes.STRING,
     page_url:DataTypes.STRING,
     image_url:DataTypes.TEXT
    });
return Favourite;
}
