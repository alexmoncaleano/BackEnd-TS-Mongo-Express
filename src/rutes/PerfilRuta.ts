import { Router } from "express";
import perfilControlador from "../controller/PerfilControlador";

class PerfilRuta {
    public rutaApiPerfil: Router;

    constructor(){
        this.rutaApiPerfil = Router();
        this.configRutesPerfil();
    }
    public configRutesPerfil(): void{
        this.rutaApiPerfil.get("/list", perfilControlador.listPerfil);
        this.rutaApiPerfil.post("/create", perfilControlador.createPerfil);
        this.rutaApiPerfil.delete("/delete/:codigo", perfilControlador.deletePerfil);
    }
    
}

const perfilRuta = new PerfilRuta();
export default perfilRuta.rutaApiPerfil;