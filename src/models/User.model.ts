import {Schema,model} from "mongoose"
import UserInterface from "../interfaces/User.interface"

const UserSchema = new Schema<UserInterface>({
    id: { type: Number, required: true, unique: true },
    displayName: { type: String,required: true,unique: true },
    email: { type: String, required: true,unique: true },
    password:{ type: String, required: true }
})

export default model<UserInterface>('User', UserSchema)