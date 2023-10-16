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
    year:{
        type: String,
        required:true
    },
    grade:{
        type: String,
        required:true
    },
    school:{
        type:String,
        required:true
    }
    
   
     
     

},{timestamps: true})



export default mongoose.model('School', school);