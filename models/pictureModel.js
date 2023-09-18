import mongoose from 'mongoose'

const pictureSchema = mongoose.Schema({
    
    myImage: String
})

export default mongoose.model('picture',pictureSchema)