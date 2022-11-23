import { PerfilEntidad } from "../entity/PerfilEntity";
import { Response } from "express";
import PerfilScheme from "../scheme/PerfilScheme";
import UserScheme from "../scheme/UserScheme";

class PerfilDao {
  protected static async obtenerUnPerfil(
    identificador: any,
    res: Response
  ): Promise<any> {
    const jsonPerfil = { _id: identificador };
    const existePerfil = await PerfilScheme.findOne(jsonPerfil).exec();
    if (existePerfil) {
      res.status(200).json(existePerfil);
    } else {
      res
        .status(400)
        .json({ respuesta: "El perfil NO existe con ese identificador" });
    }
  }
  //Creamos una promesa
  protected static async listPerfil(res: Response): Promise<any> {
    //async es que es un metodo asincrono, Promise<any> Significa que puede no haber respuesta
    const datos = await PerfilScheme.find().sort({ _id: -1 }); //el await es lo que le dice que espere la respuesta de la promesa, se tiene que utilizar siempre con async
    if (datos) {
      res.status(200).json(datos);
    } else {
      res.status(400).json({ respuesta: "NO existen perfiles" });
    }
  }

  protected static async createPefil(
    parametros: any,
    res: Response
  ): Promise<any> {
    delete parametros._id;
    delete parametros.datosUsuario;
    const existe = await PerfilScheme.findOne(parametros);

    if (existe) {
      res.status(400).json({ respuesta: "El perfil ya existe" });
    } else {
      const objPerfil = new PerfilScheme(parametros);
      objPerfil.save((miError, objeto) => {
        if (miError) {
          res.status(400).json({ respuesta: "Error al crear el Perfil" });
        } else {
          res.status(200).json({ id: objeto._id });
        }
      });
    }
  }

  public static async deletePerfil(
    parametro: any,
    res: Response
  ): Promise<any> {
    const llave = { _id: parametro };
    const cantidad = await UserScheme.countDocuments({ codPerfil: llave });
    if (cantidad > 0) {
      res
        .status(400)
        .json({ respuesta: "Error, el perfil tiene usuarios relacionados" });
    } else {
      const existe = await PerfilScheme.findById(parametro).exec();
      if (existe) {
        PerfilScheme.deleteOne(
          { _id: parametro },
          (miError: any, objeto: any) => {
            //PerfilEsquema.findByIdAndDelete(parametro, (miError: any, objeto: any) => {
            if (miError) {
              res
                .status(400)
                .json({ respuesta: "Error al eliminar el Perfil" });
            } else {
              res.status(200).json({ eliminado: objeto });
            }
          }
        );
      } else {
        res.status(400).json({ respuesta: "El perfil NO existe" });
      }
    }
  }

  protected static async updatePerfil(
    codigo: string,
    parametros: any,
    res: Response
  ): Promise<any> {
    //const existe = await UserScheme.findById(codigo).exec();
    //const existe = await UserSheme.findById({_id:codigo});
    const existe = await PerfilScheme.findById(codigo).exec();
    if (existe) {
      PerfilScheme.findByIdAndUpdate(
        { _id: codigo },
        { $set: parametros },
        (miError: any, miObjeto: any) => {
          if (miError) {
            res
              .status(400)
              .json({ Respuesta: "No se puede actualizar el Perfil" });
          } else {
            res.status(200).json({
              Respuesta: "Perfil Actualizado",
              Antiguo: miObjeto,
              Nuevo: parametros,
            });
          }
        }
      );
    } else {
      res.status(400).json({ Respuesta: "El perfil a actualizar no existe" });
    }
  }
}

export default PerfilDao; //para poder utilizar tu codigo en el proyecto tienes que importarlo.
