import { Router } from "express";
import perfilControlador from "../controlador/PerfilControlador";

class PerfilRuta {
    public rutaApiPerfil: Router;

    constructor(){
        this.rutaApiPerfil = Router();
        this.configuracion();
    }
    public configuracion(): void{
        this.rutaApiPerfil.get("/list", perfilControlador.consulta);
        this.rutaApiPerfil.post("/create", perfilControlador.crear);
        this.rutaApiPerfil.delete("/delete/:codigo", perfilControlador.eliminar);
    }
    
}

const perfilRuta = new PerfilRuta();
expor