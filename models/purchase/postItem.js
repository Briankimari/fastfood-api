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
      mixLength:[100, "Item is above 100K,Please contact the Admin "],
     
    },
    agree:{
        type:String,
    
    },
    area:{
        type:String,
        required:[true,"Current location is required"]
    },
    image:{
        type:String,
        required:[true,"Please add an Image"],
        minLength:[1,"cannot post multiple images"]
    }

},{timestamps:true})


export default mongoose.model('postItem', postItem);