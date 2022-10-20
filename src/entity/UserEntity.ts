export class UserEntity{
    
    public idUser:string;
    public typeIdUser:string;
    public nameUser:string;
    public lastNameUser:string;
    public emailUser:string;
    public telephoneUser:string;

    constructor(idUser:string, typeId:string, nameUser:string, lastNameUser:string, emailUser:string, telephoneUser:string){
        this.idUser=idUser;
        this.typeIdUser=typeId;
        this.nameUser=nameUser;
        this.lastNameUser=lastNameUser;
        this.emailUser=emailUser;
        this.telephoneUser=telephoneUser;
    }
}
export default UserEntity;