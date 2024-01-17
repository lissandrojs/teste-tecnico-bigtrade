import PostController from "../controllers/Post.controller"
import {Router} from "express"

const routerPost = Router()

routerPost.post("/posts",PostController.createNewPost)
routerPost.get("/posts",PostController.getAllPosts)
routerPost.get("/posts/:id",PostController.getPostByID)
routerPost.get("/posts/:title",PostController.getPostByTitle)
routerPost.put("/posts/:id",PostController.updatePost)
routerPost.delete("/posts/:id",PostController.deletePost)

export default routerPost