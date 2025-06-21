
const mongoose = require('mongoose');


const studentsSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    semester:{type:String,required:true},
    branch:{type:String,required:true},
    phone:{type:String,required:true,unique:true}
})
const studentModel = mongoose.model("students",studentsSchema)
module.exports=studentModel

