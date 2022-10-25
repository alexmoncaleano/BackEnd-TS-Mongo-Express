import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

class Seguridad{

    public verificarToken(req:Request, res:Response, next:NextFunction){
        if(!req.headers.authorization){
            res.status(401).json({respuesta:"Sin credenciales"});
        }else{
            try{
                const keyPrivate = String(process.env.CLAVE_SECRETA);//clave_secreta viene de variables.env
                const token = req.headers.authorization?.split(" ")[1] as string;//divide en dos el token que llega y coge la segunda parte, solo el codigo y lo vuelve un texto 
                const dates = jwt.verify(token,keyPrivate);
                req.body.datesUser = dates;
                next();
            }catch(Error){
                res.status(401).json({respuesta:"Credenciales invalidas"});
            }
        }
    }
}

const seguridad = new Seguridad(); 
export default seguridad;