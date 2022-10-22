import UserScheme from "../scheme/UserScheme";
import { Response } from "express";

class UserDao {
  protected static async listUser(res: Response): Promise<any> {
    const datos = await UserScheme.find().sort({ _id: -1 });
    res.status(200).json(datos);
  }

  protected static async createUser(correo:any, parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await UserScheme.findOne(correo);
    if (existe) {
      res.status(400).json({ respuesta: "El correo ya existe" });
    } else {
      const objUser = new UserScheme(parametros);
      objUser.save((miError, miObjeto) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede crear el usuario" });
        } else {
          res.status(200).json({
            respuesta: "Usuario creado exitosamente",
            codigo: miObjeto._id,
          });
        }
      });
    }
  }
  public static async deleteUser(parametro: any, res: Response): Promise<any> {
    const existe = await UserScheme.findById(parametro);
    if (existe) {
      UserScheme.deleteOne({ parametro }, (miError: any, miObjeto: any) => {
        if (miError) {
          res
            .status(400)
            .json({ respuesta: "No se puede eliminar el Usuario" });
        } else {
          res.status(200).json({
            respuesta: "Usuario eliminado correctamente",
            eliminado: miObjeto.deletedCount,
          });
        }
      });
    } else {
      res.status(400).json({ respuesta: "No existe el Usuario" });
    }
  }
  protected static async updateUser(codigo: string, parametros: any, res: Response): Promise<any> {
    //const existe = await UserScheme.findById(codigo).exec();
    //const existe = await UserSheme.findById({_id:codigo});
    const existe = await UserScheme.findById(codigo).exec();
    if(existe){
      UserScheme.findByIdAndUpdate(
        {_id:codigo},
        {$set:parametros},
        (miError: any, miObjeto: any) => {
          if (miError) {
            res.status(400).json({Respuesta: "No se puede actualizar el Usuario"});
          }else {
            res
            .status(200)
            .json({
              Respuesta: "Usuario Actualizado",
              Antiguo: miObjeto,
              Nuevo: parametros
            });
          }
        }
      );
    }else {
      res.status(400).json({Respuesta: "El Usuario a actualizar no existe"});
    }
  }
}

export default UserDao;
