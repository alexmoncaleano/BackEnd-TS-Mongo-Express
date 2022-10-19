import { Request, Response } from "express";
import GoodsDao from "../dao/GoodsDao";

class GoodsController extends GoodsDao {
  public listGoods(req: Request, res: Response): void {
    GoodsController.listGoods(res);
  }
  public createGoods(req: Request, res: Response): void {
    GoodsController.createGoods(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
  }
}

const goodsController = new GoodsController();
export default goodsController;
