import GoodsScheme from "../scheme/GoodsScheme";
import { Response } from "express";

class GoodsDao {
  protected static async listGoods(res: Response): Promise<any> {
    const datos = await GoodsScheme.find().sort({ _id: -1 });
    res.status(200).json(datos);
  }

  protected static async createGoods(
    parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await GoodsScheme.findOne(parametros);
    if (existe) {
      res.status(400).json({ respuesta: "El articulo ya existe" });
    } else {
      const objGoods = new GoodsScheme(parametros);
      objGoods.save((miError, miObjeto) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede crear el articulo" });
        } else {
          res.status(200).json({
            respuesta: "Articulo creado exitosamente",
            codigo: miObjeto._id,
          });
        }
      });
    }
  }
  public static async deleteGoods(parametro: any, res: Response): Promise<any> {
    const existe = await GoodsScheme.findById(parametro);
    if (existe) {
      GoodsScheme.deleteOne({ parametro }, (miError: any, miObjeto: any) => {
        if (miError) {
          res
            .status(400)
            .json({ respuesta: "No se puede eliminar el Articulo" });
        } else {
          res.status(200).json({
            respuesta: "Articulo eliminado correctamente",
            eliminado: miObjeto.deletedCount,
          });
        }
      });
    } else {
      res.status(400).json({ respuesta: "No existe el Articulo" });
    }
  }
  protected static async updateGoods(
    codigo: string,
    parametros: any,
    res: Response
  ): Promise<any> {
    //const existe = await UserScheme.findById(codigo).exec();
    //const existe = await UserSheme.findById({_id:codigo});
    const existe = await GoodsScheme.findById(codigo).exec();
    if (existe) {
      GoodsScheme.findByIdAndUpdate(
        { _id: codigo },
        { $set: parametros },
        (miError: any, miObjeto: any) => {
          if (miError) {
            res
              .status(400)
              .json({ Respuesta: "No se puede actualizar el Articulo" });
          } else {
            res.status(200).json({
              Respuesta: "Articulo actualizado",
              Antiguo: miObjeto,
              Nuevo: parametros,
            });
          }
        }
      );
    } else {
      res.status(400).json({ Respuesta: "El Articulo a actualizar no existe" });
    }
  }
}

export default GoodsDao;
