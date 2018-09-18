var mongo =require("mongodb");
var mongodbClient=mongo.MongoClient;
var ulr="mongodb://localhost:27017/mydb";

mongodbClient.create(url,function(err,db){
if(err)throw err!

		console.log("DataBase is created!");
		db.close();
})