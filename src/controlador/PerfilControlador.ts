import PerfilDao from "../dao/PerfilDao";
import { Request, Response } from "express";


class PerfilControlador extends PerfilDao {
    public consulta(req: Request, res: Response): void {
        PerfilControlador.consultarPerfiles(res);
    }
    public crear(req: Request, res: Response): void {
        PerfilControlador.crearPefil(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
    }
    public eliminar(req: Request, res: Response): void {
        PerfilControlador.eliminarPerfil(req.params.codigo, res);
      }
    
}

const perfilControlador = new PerfilControlador();
export default perfilControlador;