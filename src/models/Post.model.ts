import PostInterface from "../interfaces/Post.interface"
import {Schema,model} from "mongoose"

const PostSchema = new Schema<PostInterface>({
    id: {type: Number, required: true, unique: true},
    title: {type: String, required: true},
    content: { type: String, required: true},
    userId: {type: Number, required: true}
})

export default model<PostInterface>('Post',PostSchema)