 import Profile from '../../models/paymentVintage/itemDetails.js'

 
// get assets
export const getDetails = async(req,res) => {
    try {
        const profile = await Profile.find();
        res.json(profile);
    } catch (error) {
      res.status(404).json({message: error.message})

    } 
}
// get asset by id
export const getDetailsById = async(req,res) => {
    try {
        const profile= await Profile.findById(req.params.id);
    res.json(profile);
}
     catch (error) {
        res.status(404).json({message: error.message})
    }
}
// save assets


export const saveDetails = async (req, res) => {
  try {
    const itemId = req.params.id; 
    const profile = new Profile({ ...req.body, itemId });

    const insertedProfile = await profile.save();
    res.status(201).json(insertedProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update  

export const updateDetails = async (req, res) => {
  try {
    const updatedProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete assets

export const deleteDetails = async(req,res) => {
    try {
        const deletedProfile= await Profile.deleteOne({_id:req.params.id}, {$set: req.body});
    res.status(200).json(deletedProfile);
}
     catch (error) {
        res.status(400).json({message: error.message});
    }
}
     