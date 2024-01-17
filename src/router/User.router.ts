import UserController from "../controllers/User.controller"
import {Router} from "express"

const routerUser = Router()

routerUser.post("/users",UserController.createUser)
routerUser.put("/users/:id",UserController.updateUser)
routerUser.get("/users/:id",UserController.getUserByID)
routerUser.get("/users/:email",UserController.getUserEmail)
routerUser.delete("/users/:id",UserController.deleteUser)

export default routerUser