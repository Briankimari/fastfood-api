import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Profile from './models/paymentVintage/payment.js'; 
import Post from './models/pictureModel.js'
import errorHandler from './middleware/errorMiddleware.js';

const app = express();

dotenv.config();

// setting app storage
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
);

app.use(cookieParser());
app.use(cors());


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
    // For simplicity, we'll create a new Profile document with the verification results
    const profile = new Profile({
      paymentId,
      verificationResult,
      client,
      mCode,
      password,
      username
    });

    try {
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

// get data
app.get('/api/get-verification-data', async (req, res) => {
  try {
    const verificationData = await Profile.find(); // Assuming Profile is your mongoose model
    res.json(verificationData);
  } catch (error) {
    console.error('Error fetching verification data:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server is running on port ${process.env.PORT || 5000}`)
    )
  )
  .catch((error) => console.log(error.message));

app.use(errorHandler);
