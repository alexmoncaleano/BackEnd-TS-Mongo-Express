import { Request, Response } from "express";
import SelectionDao from "../dao/SelectionDao";

class SelectionController extends SelectionDao {
  public listSelection(req: Request, res: Response): void {
    const User = {idUser:req.body.idUser}
    SelectionController.listSelectionById(User, res);
  }
  public createSelection(req: Request, res: Response): void {
    SelectionController.createSelection(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
  }
}
const selectionController = new SelectionController();
export default selectionController;
