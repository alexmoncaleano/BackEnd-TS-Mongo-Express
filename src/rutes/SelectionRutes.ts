import { Router } from "express";
import selectionController from "../controller/SelectionController";

class SelectionRutes{
    //se define una variable tipo router
    public rutaApiSelection: Router;

    //iniciamos la variable de ruta
    constructor(){
        this.rutaApiSelection = Router();
        this.configrRutesSelection();

    };
    public configrRutesSelection(): void{
        this.rutaApiSelection.get("/list", selectionController.listSelection),
        this.rutaApiSelection.post("/create", selectionController.createSelection)
    }

};

const selectionRuta = new SelectionRutes();
export default selectionRuta.rutaApiSelection;