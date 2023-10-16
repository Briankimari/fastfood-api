
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from "dotenv";
import TokenRoute from './routes/token.js'
import EditProfile from './routes/EditProfile.js' 
import auth from './routes/authRoutes.js'
import Post from './models/pictureModel.js'
import errorHandler from "./middleware/errorMiddleware.js"
import Order from "./routes/purchaseRouter.js"
import student from './routes/schoolRoutes.js'
import grade from './routes/gradeRoutes.js'

const app =express();

 
dotenv.config()



// setting app storage

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended: true, parameterLimit:50000}));
 

app.use(cookieParser());
app.use(cors());


// routes links 
app.use('/token',TokenRoute);
app.use(EditProfile);
app.use(auth);
app.use(Order);
app.use(student);
app.use(grade)
app.use(errorHandler);

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



mongoose.connect( process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, ()=> console.log(`server a2 running on port:${PORT}`)))
.catch((error)=>console.log(error.message));