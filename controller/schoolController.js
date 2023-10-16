 import Profile from '../models/schoolModel.js'

 
// get school
export const getSchool = async(req,res) => {
    try {
        const profile = await Profile.find();
        res.json(profile);
    } catch (error) {
      res.status(404).json({message: error.message})

    } 
}
// get school by id
export const getSchoolById = async(req,res) => {
    try {
        const profile= await Profile.findById(req.params.id);
    res.json(profile);
}
     catch (error) {
        res.status(404).json({message: error.message})
    }
}
// school assets

export const saveSchool = async(req,res) => {
    const profile= new Profile(req.body);
    try {
        const insertedProfile = await profile.save();
        res.status(201).json(insertedProfile);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
} 
// update assets

export const updateSchool = async(req,res) => {
    try {
        const updatedProfile= await Profile.updateOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(updatedProfile);
}
     catch (error) {
        res.status(400).json({message: error.message});
    }
}
// delete assets

export const deleteSchool = async(req,res) => {
    try {
        const deletedProfile= await Profile.deleteOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(deletedProfile);
}
     catch (error) {
        res.status(400).json({message: error.message});
    }
}
     