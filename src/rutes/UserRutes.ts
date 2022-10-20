import { Router } from "express";
import UserController from "../controller/UserController";

class UserRutes{
    //se define una variable tipo router
    public rutaApiUser: Router;

    //iniciamos la variable de ruta
    constructor(){
        this.rutaApiUser = Router();
        this.configRutesUser();

    };
    public configRutesUser(): void{
        this.rutaApiUser.get("/list", UserController.listUser);
        this.rutaApiUser.post("/create", UserController.createUser);
        this.rutaApiUser.delete("/delete/:codigo", UserController.deleteUser);
        this.rutaApiUser.put("/update/:codigo", UserController.updateUser);
    }

};

const userRutes = new UserRutes();
export default userRutes.rutaApiUser;