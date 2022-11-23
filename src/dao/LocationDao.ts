import LocationScheme from "../scheme/LocationSheme";
import { Response } from "express";
import cifrar from "bcryptjs";
import jwt from "jsonwebtoken";


class LocationDao {
  protected static async LocationList(res: Response): Promise<any> {
    const datos = await LocationScheme.find().sort({ _id: -1 }).populate("codPerfil").exec();
    res.status(200).json(datos);
  }

  protected static async LocationCreate(address:any, parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await LocationScheme.findOne(address).exec();
    if (existe) {
      res.status(400).json({ respuesta: "La localizacion ya existe" });
    } else {
      

      const obj = new LocationScheme(parametros);
      obj.save((miError, miObjeto) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede crear el inmueble" });
        } else {
          const datosVisibles={
            codInmueble: miObjeto._id
          };
          
        }
      });
    }
  }
  protected static async InmueblesUpdate(codigo: string, parametros: any, res: Response): Promise<any> {

    const existe = await InmueblesScheme.findById(codigo).exec();
    if(existe){
        InmueblesScheme.findByIdAndUpdate(
        {_id:codigo},
        {$set:parametros},
        (miError: any, miObjeto: any) => {
          if (miError) {
            res.status(400).json({Respuesta: "No se puede actualizar el Inmueble"});
          }else {
            res
            .status(200)
            .json({
              Respuesta: "Inmueble Actualizado",
              Antiguo: miObjeto,
              Nuevo: parametros
            });
          }
        }
      );
    }else {
      res.status(400).json({Respuesta: "El Inmueble a actualizar no existe"});
    }
  }
}

export default InmuebleDao;