import { PerfilEntidad } from "../entity/PerfilEntidad";
import { Response } from "express";
import PerfilEsquema from "../scheme/PerfilEsquema";

class PerfilDao {
  //Creamos una promesa
  protected static async consultarPerfiles(res: Response): Promise<any> {
    //async es que es un metodo asincrono, Promise<any> Significa que puede no haber respuesta
    const datos = await PerfilEsquema.find().sort({_id:-1}); //el await es lo que le dice que espere la respuesta de la promesa, se tiene que utilizar siempre con async
    res.status(200).json(datos);
  }

  protected static async crearPefil(
    parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await PerfilEsquema.findOne(parametros);
    if (existe) {
      res.status(400).json({ respuesta: "El perfil ya existe" });
    } else {
      const objPerfil = new PerfilEsquema(parametros);
      objPerfil.save((miError, miObjeto) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede crear el perfil" });
        } else {
          res
            .status(200)
            .json({
              respuesta: "Pefil creado exitosamente",
              codigo: miObjeto._id,
            });
        }
      });
    }
  }
  public static async eliminarPerfil(
    parametro: any,
    res: Response
  ): Promise<any> {
    const existe = await PerfilEsquema.findById(parametro);
    if (existe) {
      PerfilEsquema.deleteOne({ parametro }, (miError: any, miObjeto: any) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede eliminar" });
        } else {
          res
            .status(200)
            .json({
              respuesta: "Perfil eliminado correctamente",
              eliminado: miObjeto.deletedCount
            });
        }
      });
    } else {
      res.status(400).json({ respuesta: "No existe el perfil" });
    }
  }
}

export default PerfilDao; //para poder utilizar tu codigo en el proyecto tienes que importarlo.
