import mongoose from "mongoose";
 

const school= mongoose.Schema({
    firstName:{
        type: String,
        required:[true,"Please add a name"]
    },
      surName:{
        type: String,
        required:[true,"Please add a name"]
    },
    indexNumber:{
        type:String,
        required:[true,"Please add a valid index Number"]
    },
    
   
     
     

},{timestamps: true})



export default mongoose.model('School', school);