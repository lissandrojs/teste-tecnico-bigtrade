import {Request,Response} from "express"
import UserService from "../services/User.service"


class UserController{

    public async getUserByID(req: Request, res: Response){
        try{
            const {id} = req.params
            const infoUser = await UserService.getUserByID(Number(id))
            
            if (!infoUser) {
                return res.status(404).json({ error: 'User not found' });
              }
              return res.json(infoUser);

        }catch(error){
            return res.status(500).json({error: `Internal Error ${error}` })
        }
    }
    
    public async getUserEmail(req:Request,res: Response){
        try{
            const {email} = req.params
            const infoUser = await UserService.getUserByEmail(email)

            if (!infoUser) {
                return res.status(404).json({ error: 'Email User not found' });
              }
              return res.json(infoUser);

        }catch(error){
            return res.status(500).json({error: `Internal Error ${error}` })
        }
    }   

    public async createUser(req:Request,res: Response){
        try{
            const { body } = req
            const newUser = await UserService.createUser(body)
        
            return res.status(201).json(newUser);
        
        }catch(error){
            return res.status(500).json({error: `Internal Error ${error}` })
        }
    }

    public async updateUser(req:Request, res: Response){
        try{
            const { body } = req
            const {id} = req.params

            const updateUser = await UserService.updateUser(Number(id),body)

            if (!updateUser) {
                return res.status(404).json({ error: 'User not found' });
              }
        }catch(error){
            return res.status(500).json({error: `Internal Error ${error}` })
        }
    }
    
    public async deleteUser(req: Request, res: Response) {
        try {
          const {id} = req.params
          const user = await UserService.deleteUser(Number(id));

          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
          return res.json({ message: 'User deleted successfully' });
        } catch (error) {
            return res.status(500).json({error: `Internal Error ${error}` })
        }
      }

}

export default new UserController()