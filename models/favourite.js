module.exports=function(sequelize,DataTypes)
{
    var Favourite=sequelize.define("Favourite",{
    id:{

        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
     name:DataTypes.STRING,
     page_url:DataTypes.STRING,
     image_url:DataTypes.TEXT
    });
return Favourite;
}
