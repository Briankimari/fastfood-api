import mongoose from "mongoose";
 

const grade= mongoose.Schema({
    grade:{
        type: Number,
        required:true
    },
      
   
     
     

},{timestamps: true})



export default mongoose.model('Grade', grade);