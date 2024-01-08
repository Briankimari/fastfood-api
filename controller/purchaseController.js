import Profile from '../models/purchaseModel.js'
import multer from 'multer'


const storage = multer.memoryStorage();
const upload = multer({storage: storage});

 
// get assets
export const getPurchase = async(req,res) => {
    try {
        const profile = await Profile.find();
        const post = await Profile.find();
        res.json(post)
        res.json(profile);
    } catch (error) {
      res.status(404).json({message: error.message})

    } 
}
// get asset by id
export const getPurchaseById = async(req,res) => {
    try {
        const profile= await Profile.findById(req.params.id);
    res.json(profile);
}
     catch (error) {
        res.status(404).json({message: error.message})
    }
}
// save assets

export const savePurchase = async(req,res) => { 
    const profile= new Profile(req.body);

    try {
        const insertedProfile = await profile.save();
        const newImage = await Profile.create(body);
        newImage.save();
        res.status(201).json(insertedProfile);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
} 
// update assets

export const updatePurchase = async(req,res) => {
    try {
        const updatedProfile= await Profile.updateOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(updatedProfile);
}
     catch (error) {
        res.status(400).json({message: error.message});
    }
}
// delete assets

export const deletePurchase = async(req,res) => {
    try {
        const deletedProfile= await Profile.deleteOne({_id:req.params.id}, {$set: req.body});
        const deleteImage = await Profile.deleteOne({_id:req.params.id}, {$set:req.body});
        res.status(200).json(deleteImage);
    res.status(200).json(deletedProfile);
}
     catch (error) {
        res.status(400).json({message: error.message});
    }
}
     