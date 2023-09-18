import mongoose from "mongoose";

const Purchase = mongoose.Schema ({
 
    idNumber:{
        type:String,
        required:[true,"Please add your id"]
    },

      
      phoneNumber:{
        type: String,
        required:true,
        minLength:[10, "Please add a valid phone number"],
    },

     country:{
        type: String,
        
               
    }, 
    postalAddress:{
      type:String,
      required:true,
     
    },
    agree:{
        type:String,
    
    }

},{timestamps:true})


export default mongoose.model('Purchase', Purchase);