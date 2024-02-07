import mongoose from "mongoose";

const itemDetailsSchema = mongoose.Schema({
  itemAge: {
    type: String,
    required: true,
  },
  delivery: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  contactWhatsapp: {
    type: Number,
    required: true,
  },
  itemLocation: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  selectedFiles: {
    type: mongoose.Schema.Types.Mixed,
    required: [true, "please add a file"],
  },
  describeItem: {
    type: String,
    required: true,
  },
  // second
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
    
    
    },
    area:{
        type:String,
        required:[true,"Current location is required"]
    },
    myImage:{
        type: String,
        required:[true,"please add a file"]
    }
}, { timestamps: true });

const ItemDetails = mongoose.model('ItemDetails', itemDetailsSchema);

export default ItemDetails;
