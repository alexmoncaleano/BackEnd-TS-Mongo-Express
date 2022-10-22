export class PerfilEntidad{

    public nombrePerfil:string;
    public estadoPerfil:number; 
    constructor(nomp:string, est:number){
        this.nombrePerfil=nomp;
        this.estadoPerfil=est;
    }
}
export default PerfilEntidad;