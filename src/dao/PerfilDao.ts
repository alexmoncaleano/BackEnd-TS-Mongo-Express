import { PerfilEntidad } from "../entity/PerfilEntity";
import { Response } from "express";
import PerfilScheme from "../scheme/PerfilScheme";

class PerfilDao {
  //Creamos una promesa
  protected static async listPerfil(res: Response): Promise<any> {
    //async es que es un metodo asincrono, Promise<any> Significa que puede no haber respuesta
    const datos = await PerfilScheme.find().sort({_id:-1}); //el await es lo que le dice que espere la respuesta de la promesa, se tiene que utilizar siempre con async
    res.status(200).json(datos);
  }

  protected static async createPefil(
    parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await PerfilScheme.findOne(parametros);
    if (existe) {
      res.status(400).json({ respuesta: "El perfil ya existe" });
    } else {
      const objPerfil = new PerfilScheme(parametros);
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
  public static async deletePerfil(
    parametro: any,
    res: Response
  ): Promise<any> {
    const existe = await PerfilScheme.findById(parametro);
    if (existe) {
      PerfilScheme.deleteOne({ parametro }, (miError: any, miObjeto: any) => {
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
  protected static async updatePerfil(codigo: string, parametros: any, res: Response): Promise<any> {
    //const existe = await UserScheme.findById(codigo).exec();
    //const existe = await UserSheme.findById({_id:codigo});
    const existe = await PerfilScheme.findById(codigo).exec();
    if(existe){
      PerfilScheme.findByIdAndUpdate(
        {_id:codigo},
        {$set:parametros},
        (miError: any, miObjeto: any) => {
          if (miError) {
            res.status(400).json({Respuesta: "No se puede actualizar el Perfil"});
          }else {
            res
            .status(200)
            .json({
              Respuesta: "Perfil Actualizado",
              Antiguo: miObjeto,
              Nuevo: parametros
            });
          }
        }
      );
    }else {
      res.status(400).json({Respuesta: "El perfil a actualizar no existe"});
    }
  }
}

export default PerfilDao; //para poder utilizar tu codigo en el proyecto tienes que importarlo.
