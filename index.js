import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Profile from './models/paymentVintage/payment.js';
import Post from './models/pictureModel.js'
import errorHandler from './middleware/errorMiddleware.js';

import auth from './routes/authRoutes.js'
import edits from './routes/EditProfile.js';
import grades from './routes/gradeRoutes.js';
import school from './routes/schoolRoutes.js';
import token from './routes/token.js';
import purchase from './routes/purchaseRouter.js';
import postItemDetails from './routes/purchase/itemDetails.js'


const app = express();



dotenv.config();

// Middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
);

app.use(cookieParser());
app.use(cors());


app.use(auth);
app.use(edits);
app.use(grades);
app.use(school);
app.use(token);
app.use(purchase); 
app.use(postItemDetails)



// setting the port 
const PORT= process.env.PORT || 5000

// image

app.post('/insert', async(req,res) => {
    const body = req.body;

    try {
        const newImage = await Post.create(body)
        newImage.save();
        res.status(201).json({msg: "New Image Uploaded"})
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}); 

//get images
app.get('/insert', async(req,res) => {
    try {
        const post= await Post.find();
            res.json(post);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
});


// delete image
app.delete('/insert-delete/:id',async(req,res)=> {
    try {
        const deleteImage= await  Post.deleteOne({_id:req.params.id}, {$set:req.body});
        res.status(200).json(deleteImage);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
});


// Replace this placeholder with your actual admin credentials
const adminUsername = 'kimbandiii';
const adminPassword = 'Brian32120';

// Route for handling payment verification and saving to the database
app.post('/api/admin-verify-payment', async (req, res) => {
  const { username, password, paymentId, verificationResult, client, mCode } =
    req.body;

  // Check admin credentials
  if (username === adminUsername && password === adminPassword) {
    // Perform payment verification logic
    try {
      // Create a new Profile document with the verification results
      const profile = new Profile({
        paymentId,
        verificationResult,
        client,
        mCode,
        password,
        username,
      });

      const insertedProfile = await profile.save();
      res.status(201).json({
        success: true,
        message: 'Payment verified successfully.',
        profile: insertedProfile,
      });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error.', error });
    }
  } else {
    res
      .status(401)
      .json({ success: false, message: 'Unauthorized: Invalid admin credentials.' });
  }
});

// Route to get verification data
app.get('/api/get-verification-data', async (req, res) => {
  try {
    // Fetch and return all profiles
    const verificationData = await Profile.find();
    res.json(verificationData);
  } catch (error) {
    console.error('Error fetching verification data:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server is running on port ${process.env.PORT || 5000}`)
    )
  )
  .catch((error) => console.error('MongoDB connection error:', error));

// Use the error handling middleware
app.use(errorHandler);
