import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    movieTitle: String,
    creator: String,
    priority: Number,
    submittedOn: {
        type: Date,
        default: Date.now()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage