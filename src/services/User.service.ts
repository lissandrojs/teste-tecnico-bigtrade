import {InputUserInterface} from "../interfaces/User.interface";
import UserModel from "../models/Post.model";


class UserService {
    public async getAllUsers() {
        return UserModel.find();
      }

    public async getUserByID(id:number){
        return UserModel.findById({id})
    }

    public async getUserByEmail(email:string){
       return UserModel.findOne({email})
    }

    public async createUser(userData:InputUserInterface){
        return UserModel.create(userData)
    }

    public async updateUser(id:number,userDataUpdate:InputUserInterface){
        return UserModel.findOneAndUpdate({id},userDataUpdate, {new:true})
    }

    public async deleteUser(id:number){
        return UserModel.findOneAndDelete({id})
    }
}

export default new UserService()