 import postItem from '../../models/purchase/postItem.js'

 
// get post
export const getItemPost = async(req,res) => {
    try {
        const profile = await postItem.find();
        res.json(profile);
    } catch (error) {
      res.status(404).json({message: error.message})

    } 
}
// get post by id
export const getItemPostById = async(req,res) => {
    try {
        const profile= await postItem.findById(req.params.id);
    res.json(profile); 
}
     catch (error) {
        res.status(404).json({message: error.message})
    }
}
// save post

export const savePostItem = async(req,res) => {
    const profile= new postItem(req.body);
    try {
        const insertedProfile = await profile.save();
        res.status(201).json(insertedProfile);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
} 
// update postitem

export const updatePostItem= async(req,res) => {
    try {
        const updatedProfile= await postItem.updateOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(updatedProfile);
}
     catch (error) {
        res.status(400).json({message: error.message});
    }
}
// delete postitem

export const deletePostItem = async(req,res) => {
    try {
        const deletedProfile= await postItem.deleteOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(deletedProfile);
}
     catch (error) {
        res.status(400).json({message: error.message});
    }
}
     