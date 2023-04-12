require("../Config/Db");
const mongoose= require("mongoose")
const Collection=require(".../Config/Collection");

const authSchema=new mongoose.Schema({
    EmpName:{type:String,required:[true,"name is required field"]},
    EmpEmail:{type:String,unique:true,required:[true,"email is required field"]},
    EmpCity:{type:String,required:[true,"city is required field"]},
    EmpId:{type:Number,required:[true,"id is required field"]},
 

})

const employeeModel= mongoose.model(Collection.employee,authSchema)
module.exports=employeeModel;