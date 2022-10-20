import { Request, Response } from "express";
import GoodsDao from "../dao/GoodsDao";

class GoodsController extends GoodsDao {
  public listGoods(req: Request, res: Response): void {
    GoodsController.listGoods(res);
  }
  public createGoods(req: Request, res: Response): void {
    GoodsController.createGoods(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
  }
  public deleteGoods(req: Request, res: Response): void {
    GoodsController.deleteGoods(req.params.codigo, res);
  }
  public updateGoods(req: Request, res: Response): void {
    GoodsController.updateGoods(req.params.codigo,req.body, res);
  }
}
const goodsController = new GoodsController();
export default goodsController;
