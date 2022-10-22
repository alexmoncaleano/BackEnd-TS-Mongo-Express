import { GoodsEntity } from './GoodsEntity';
import { PerfilEntidad } from './PerfilEntity';
export class UserEntity{
    public idUser:string;
    public typeIdUser:string;
    public nameUser:string;
    public lastNameUser:string;
    public emailUser:string;
    public telephoneUser:string;
    public estadeUser:number;
    public dateUser: Date;
    public userUser:string;
    public passwordUser:string;
    public codPerfil:PerfilEntidad;
    
    constructor(iduser:string, typeiduser: string, nameuser: string, lastnameuser: string,
        emailuser:string, telephoneuser:string, estadeuser:number, dateuser:Date,  useruser: string, 
        passworduser: string, codperfil: PerfilEntidad){
        
        this.idUser=iduser;
        this.typeIdUser=typeiduser;
        this.nameUser=nameuser;
        this.lastNameUser=lastnameuser;
        this.emailUser=emailuser;
        this.telephoneUser=telephoneuser;
        this.estadeUser=estadeuser;
        this.dateUser= dateuser;
        this.userUser=useruser;
        this.passwordUser=passworduser;
        this.codPerfil=codperfil;
        
    }
}
export default UserEntity;
