import {Schema,model} from "mongoose"
import {OutputUserInterface} from "../interfaces/User.interface"

const UserSchema = new Schema<OutputUserInterface>({
    id: { type: Number, required: true, unique: true },
    displayName: { type: String,required: true,unique: true },
    email: { type: String, required: true,unique: true },
    password:{ type: String, required: true }
})

export default model<OutputUserInterface>('User', UserSchema)