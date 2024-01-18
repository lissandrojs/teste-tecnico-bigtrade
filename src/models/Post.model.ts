import {OutputPostInterface} from "../interfaces/Post.interface"
import {Schema,model} from "mongoose"

const PostSchema = new Schema<OutputPostInterface>({
    id: {type: Number, required: true, unique: true},
    title: {type: String, required: true},
    content: { type: String, required: true},
    userId: {type: Number, required: true},
    published: { type: Date, required: true },
    updated: { type: Date, required: true },
})

export default model<OutputPostInterface>('Post',PostSchema)