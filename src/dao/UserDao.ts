import UserScheme from "../scheme/UserScheme";
import { Response } from "express";

class UserDao {
  protected static async listUser(res: Response): Promise<any> {
    const datos = await UserScheme.find().sort({ _id: -1 });
    res.status(200).json(datos);
  }

  protected static async createUser(
    parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await UserScheme.findOne(parametros);
    if (existe) {
      res.status(400).json({ respuesta: "El usuario ya existe" });
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
}

export default UserDao;
