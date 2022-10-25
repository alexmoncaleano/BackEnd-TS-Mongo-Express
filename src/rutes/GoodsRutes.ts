import { Router } from "express";
import goodsController from "../controller/GoodsController";

class GoodsRutes{
    //se define una variable tipo router
    public rutaApiGoods: Router;

    //iniciamos la variable de ruta
    constructor(){
        this.rutaApiGoods = Router();
        this.configrRutesGoods();

    };
    public configrRutesGoods(): void{
        this.rutaApiGoods.get("/list", goodsController.listGoods)
        this.rutaApiGoods.post("/create", goodsController.createGoods)
        this.rutaApiGoods.delete("/delete/:codigo", goodsController.deleteGoods);
        this.rutaApiGoods.put("/update/:codigo", goodsController.updateGoods);
        
    }

};

const goodsRuta = new GoodsRutes();
export default goodsRuta.rutaApiGoods;