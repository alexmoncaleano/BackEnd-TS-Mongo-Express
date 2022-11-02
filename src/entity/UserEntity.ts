import { GoodsEntity } from './GoodsEntity';
import { PerfilEntidad } from './PerfilEntity';
export class UserEntity{
    public idUser:string;
    public typeIdUser:string;
    public nameUser:string;
    public emailUser:string;
    public telephoneUser:string;
    public estadeUser:number;
    public dateUser: Date;
    public passwordUser:string;
    public codPerfil:PerfilEntidad;
    
    constructor(iduser:string, typeiduser: string, nameuser: string, 
        emailuser:string, telephoneuser:string, estadeuser:number, dateuser:Date,   
        passworduser: string, codperfil: PerfilEntidad){
        
        this.idUser=iduser;
        this.typeIdUser=typeiduser;
        this.nameUser=nameuser;
        this.emailUser=emailuser;
        this.telephoneUser=telephoneuser;
        this.estadeUser=estadeuser;
        this.dateUser= dateuser;
        this.passwordUser=passworduser;
        this.codPerfil=codperfil;
        
    }
}
export default UserEntity;
