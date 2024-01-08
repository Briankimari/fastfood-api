import mongoose from "mongoose";



const Edit = new mongoose.Schema ({

 
    userName:{
        type:String,
        required:true,
    },

      
      aboutMe:{
        type: String,
     
        maxLength:[100, "word must not exceed 100"],
    },

     myImage:{
        type: String,
               
    }, 
    currentLocation:{
      type:String,
     
    }

},{timestamps:true})


export default mongoose.model('Edits', Edit);