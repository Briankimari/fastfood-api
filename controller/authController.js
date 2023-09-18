 import asyncHandler from "express-async-handler";
 import User from "../models/authModel.js";
 import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


 const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"});
 }
 
 export const registerUser= asyncHandler( async (req,res)=> {
  const {firstName,lastName,email,password}=req.body

  if(!firstName || !lastName || !email || !password ) {
     res.status(400)
      throw new Error("Please fill all required Fields")
  }
  if (password.length < 6) {
      res.status(400) 
      throw new Error("Password too short!!!,must exceed 6 characters")
  }
 const userExists =  await User.findOne({email})
 if (userExists) {
    res.status(400)
      throw new Error("User with that email is already registered")
 }


//  new user
const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    
    
});

//  token gn
const token = generateToken(user._id);
// sending cookie-farmer
res.cookie("token", token, {
    path:"/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400),
    sameSite: "none",
    secure: true 
    
});

// sending cookie


if (user) {
    const {_id,firstName,lastName,email}=user
    res.status(201).json({
        _id,
        firstName,
        lastName,
        email,
        password,
        token
    });
} else {
    res.status(400)
    throw new Error("Invalid user data")
}

});



// login
export const loginUser = asyncHandler( async(req,res) => {
    const {email, password} =req.body

    if(!email || !password) {
        res.status(400)
    throw new Error("Please add email and password");
    }

    const user = await User.findOne({email})

     if(!user) {
        res.status(400)
    throw new Error("User not found,Please Register");
    }
    // check password-correct
    const passwordIsCorrect=await bcrypt.compare(password, user.password);
   
    
//  token gn
const token = generateToken(user._id);
// sending cookie-farmer
res.cookie("token", token, {
    path:"/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400),
    sameSite: "none",
    secure: true 
    
});

    if(user && passwordIsCorrect) {

         const {_id,firstName,lastName,email}=user
    res.status(200).json({
        _id,
        firstName,
        lastName,
        email,
        password,
        token
      });
    } else {
         res.status(400)
    throw new Error("Invalid email or password ");
    }


});


// logout user
export const logoutUser = asyncHandler(async(req,res)=>{
 res.cookie("token","", {
    path:"/",
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
    secure: true 
    
});
return res.status(200).json({message:" successfully Logged Out"});
})

// getting profile data
export const getUser = asyncHandler(async(req,res) => {
   const user =await User.findById(req.user._id)

   
if (user) {
    const {_id,firstName,lastName,email}=user
    res.status(200).json({
        _id,
        firstName,
        lastName,
        email,
       });
} else {
    res.status(400)
    throw new Error("User not found")
}
});


// Get Login Status
export const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json(false);
  }
  // Verify Token
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (verified) {
    return res.json(true);
  }
  return res.json(false);
});

// Update User
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { firstName,lastName, email } = user;
    user.email = email;
    user.firstName = req.body.firstName || firstName;
        user.lastName = req.body.lastName || lastName;
  
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
    
      
    });
  } else { 
    res.status(404);
    throw new Error("User not found");
  }
});

