import UserDao from "../dao/UserDao";
import { Request, Response } from "express";

class UserController extends UserDao {
  public listUser(req: Request, res: Response): void {
    UserController.listUser(res);
  }
  public createUser(req: Request, res: Response): void {
    UserController.createUser(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
  }
  public deleteUser(req: Request, res: Response): void {
    UserController.deleteUser(req.params.codigo, res);
  }
}

const userController = new UserController();
export default userController;