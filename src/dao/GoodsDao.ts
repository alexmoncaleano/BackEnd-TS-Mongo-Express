import GoodsScheme from "../scheme/GoodsScheme";
import { Response } from "express";

class GoodsDao {
    protected static async listGoods(res: Response): Promise<any> {
        const datos = await GoodsScheme.find().sort({_id:-1});
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
              res
                .status(200)
                .json({
                  respuesta: "Articulo creado exitosamente",
                  codigo: miObjeto._id,
                });
            }
          });
        }
      }
}

export default GoodsDao;