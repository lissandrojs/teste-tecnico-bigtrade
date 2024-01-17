import { Request, Response} from "express"
import PostService from "../services/Post.service"


class PostController {
    public async getAllPosts(req: Request, res: Response) {
        try {
          const posts = await PostService.getAllPosts();
          return res.json(posts);
        } catch (error) {
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      }

    public async getPostByID(req:Request, res:Response){
        try{
            const { id } = req.params
            const post = await PostService.getPostByID(Number(id))

            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
        
            return res.json(post)

        }catch(error){
            return res.status(500).json({error: `Internal Error ${error}` })
        }
    }

    public async getPostByTitle(req:Request, res:Response){
        try{
            const {title} = req.params
            const post = await PostService.getPostByTitle(title)
            
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }

            return res.json(post)

        }catch(error){
            return res.status(500).json({error: `Internal Error ${error}` })
        }
    }

    public async createNewPost(req:Request, res:Response){
        try{
            const {body} = req
            const newPost = await PostService.createPost(body)

            return res.json(newPost)
        }catch(error){
            return res.status(500).json({error: `Internal Error ${error}` })
        }
    }

    public async updatePost(req:Request, res:Response){
        try{
            const  { body } = req
            const { id } = req.params

            const updatePost = await PostService.updatePost(Number(id),body)
            if (!updatePost) {
                return res.status(404).json({ error: 'Post not found' });
              }
            
              return res.json(updatePost)
        }catch(error){
            return res.status(500).json({error: `Internal Error ${error}` })
        }
    }

    public async deletePost(req:Request, res:Response){
        try{
            const { id } = req.params
            const post = await PostService.deletePost(Number(id))

            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
              }
              return res.json({ message: 'Post deleted successfully' });
        }catch(error){
            return res.status(500).json({error: `Internal Error ${error}` })
        }
    }

}

export default new PostController()