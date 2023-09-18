import mongoose from "mongoose";
 import bcrypt from "bcryptjs"

const authing= mongoose.Schema({
    firstName:{
        type: String,
        required:[true,"Please add a name"]
    },
      lastName:{
        type: String,
        required:[true,"Please add a name"]
    },
   
      email:{
        type: String,
        unique: true,
        required:[true,"Please add an Email"],
        trim: true,
       
          },
     
      password:{
        type: String,
        required:[true,"Please add a password"],
        minLength:[6, "password must be up to 6 characters"],
    },
    

},{timestamps: true})

authing.pre("save", async function(next) {
if(!this.isModified("password")) {
  return next()
}

 const salt = await bcrypt.genSalt(10);
 const hashedPassword= await bcrypt.hash(this.password, salt);
 this.password= hashedPassword;
next()
})
export default mongoose.model('Auth', authing);