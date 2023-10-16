import mongoose from "mongoose";
 

const grade= mongoose.Schema({
    grade:{
        type: String,
        required:true
    },
      
   
     
     

},{timestamps: true})



export default mongoose.model('Grade', grade);