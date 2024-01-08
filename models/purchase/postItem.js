import mongoose from "mongoose";

const postItem = mongoose.Schema ({
 
    selected:{
        type:String,
        required:[true,"Please select an Item"]
    },

      
      price:{
        type: String,
        required:true,
        
    },

     itemName:{
        type: String,
        required:[true,"Please add Item name"]
        
               
    }, 
    itemPrice:{
      type:Number,
      required:[true,"PLease add itemPrice"]
      
     
    },
    agree:{
        type:String,
        required:[true,"please fill this form"]
    
    },
    area:{
        type:String,
        required:[true,"Current location is required"]
    },
    myImage:{
        type:String,
        required:[true,"Please add an Image"],
        
    }

},{timestamps:true})


export default mongoose.model('postItem', postItem);