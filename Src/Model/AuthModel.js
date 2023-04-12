require(".../config/Db");
const mongoose=require("mongoose");
const Collection = require("../config/Collection");
const authSchema=new mongoose.Schema({
    name:{type:String,required:[true,"name is required field"]},
    email:{type:String,unique:true,required:[true,"email is required field"]},
    password:{type:String,required:[true,"password is required field"]},
});
const authUser= mongoose.model(Collection.auth,authSchema)
module.exports=authUser;
 