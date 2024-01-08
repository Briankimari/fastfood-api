import mongoose from "mongoose";

const Payment = new mongoose.Schema ({
  
    username:{
        type:String,
        required:true,
    },

      
      password:{
        type: String,
        required:true
    },

     mCode:{
        type: String,
        required:true
               
    }, 
    client:{
      type:String,
      required:true
     
    },
    verificationResult:{
        type:String,
        required:true
    },
    paymentId:{
        type:String,
        required:true
    }


},{timestamps:true})


export default mongoose.model('Payment', Payment);