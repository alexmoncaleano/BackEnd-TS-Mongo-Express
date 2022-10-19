import { Router } from "express";
import goodsController from "../controller/GoodsController";

class GoodsRuta{
    //se define una variable tipo router
    public rutaApiGoods: Router;

    //iniciamos la variable de ruta
    constructor(){
        this.rutaApiGoods = Router();
        this.configrRutesGoods();

    };
    public configrRutesGoods(): void{
        this.rutaApiGoods.get("/listGoods", goodsController.listGoods)
        this.rutaApiGoods.post("/createGoods", goodsController.createGoods)
    }

};

const goodsRuta = new GoodsRuta();
export default goodsRuta.rutaApiGoods;