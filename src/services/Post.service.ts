import PostModel from "../models/Post.model";
import { InputPostInterface } from "../interfaces/Post.interface";

class PostService {
    public async getAllPosts() {
        return PostModel.find();
    }
    
    public async getPostByID(id:number){
        return PostModel.findOneAndUpdate({id})
    }

    public async getPostByTitle(title:String){
        return PostModel.findOne({title})
    }

    public async createPost(dataNewPost:InputPostInterface){
        return PostModel.create(dataNewPost)
    }

    public async updatePost(id:number,dataUpdatePost: InputPostInterface){
        return PostModel.updateOne({id},{data:dataUpdatePost})
    }

    public async deletePost(id:number){
        return PostModel.deleteOne({id})
    }
}

export default new PostService()