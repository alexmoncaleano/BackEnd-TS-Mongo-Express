import PerfilDao from "../dao/PerfilDao";
import { Request, Response } from "express";

class PerfilController extends PerfilDao {
  public listPerfil(req: Request, res: Response): void {
    PerfilController.listPerfil(res);
  }

  public createPerfil(req: Request, res: Response): void {
    PerfilController.createPefil(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
  }

  public deletePerfil(req: Request, res: Response): void {
    PerfilController.deletePerfil(req.params.codigo, res);
  }
  
  public updatePerfil(req: Request, res: Response): void {
    PerfilController.updatePerfil(req.params.codigo,req.body, res);
  }
  
  public consultaUno(req: Request, res: Response): void {
    PerfilController.obtenerUnPerfil(req.params.codigo, res);
}
}

const perfilController = new PerfilController();
export default perfilController;
