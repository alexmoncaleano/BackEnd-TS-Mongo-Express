import { GoodsEntity } from "./../entity/GoodsEntity";
import { Response } from "express";
import SelectionScheme from "../scheme/SelectionScheme";
import GoodsScheme from "../scheme/GoodsScheme";

class SelectionDao {
  protected static async listSelectionById(
    idUser: any,
    res: Response
  ): Promise<any> {
    const datos = await SelectionScheme.findById(idUser)
      .sort({ _id: -1 })
      .populate("idUser", "idGoods");
    res.status(200).json(datos);
  }
  protected static async createSelection(
    parametros: any,
    res: Response
  ): Promise<any> {
    const goods = await GoodsScheme.findById(parametros.idGoods).exec();
    if (parametros.amountGoods <= 0) {
      res
        .status(400)
        .json({ respuesta: "Seleccione la cantidad de articulos" });
    } else {
      if (goods?.stocktakingGoods) {
        if (goods.stocktakingGoods >= parametros.amountGoods) {
          if (goods?.priceGoods) {
            parametros.priceTotal = goods.priceGoods * parametros.amountGoods;
            const objSelec = new SelectionScheme(parametros);
            objSelec.save((miError, miObjeto) => {
              if (miError) {
                res
                  .status(400)
                  .json({ respuesta: "No se puede crear la seleccion" });
              } else {
                res.status(400).json({ respuesta: miObjeto });
              }
            });
          } else {
            res
              .status(400)
              .json({ respuesta: "Datos incompletos en el articulo" });
          }
        } else {
          res
            .status(400)
            .json({ respuesta: "La cantidad requerida supera el inventario" });
        }
      } else {
        res.status(400).json({ respuesta: "Inventario inexistente" });
      }
    }
  }
}
export default SelectionDao;
