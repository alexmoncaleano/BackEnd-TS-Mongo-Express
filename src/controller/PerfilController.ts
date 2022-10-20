import PerfilDao from "../dao/PerfilDao";
import { Request, Response } from "express";

class PerfilControlador extends PerfilDao {
  public listPerfil(req: Request, res: Response): void {
    PerfilControlador.listPerfil(res);
  }
  public createPerfil(req: Request, res: Response): void {
    PerfilControlador.createPefil(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
  }
  public deletePerfil(req: Request, res: Response): void {
    PerfilControlador.deletePerfil(req.params.codigo, res);
  }
  public updatePerfil(req: Request, res: Response): void {
    PerfilControlador.updatePerfil(req.params.codigo,req.body, res);
  }
}

const perfilControlador = new PerfilControlador();
export default perfilControlador;
