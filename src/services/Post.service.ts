import PostInterface from "../interfaces/Post.interface";
import PostModel from "../models/Post.model";

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

    public async createPost(dataNewPost:PostInterface){
        return PostModel.create(dataNewPost)
    }

    public async updatePost(id:number,dataUpdatePost: PostInterface){
        return PostModel.updateOne({id},{data:dataUpdatePost})
    }

    public async deletePost(id:number){
        return PostModel.deleteOne({id})
    }
}

export default new PostService()