import SelectionEntity from "./SelectionEntity";
import UserEntity from "./UserEntity";

export class DetailEntity{

    public idUser:UserEntity;   
    public list:Array<SelectionEntity>;

    constructor(iduser:UserEntity, listgoods:Array<SelectionEntity>){
            
            this.idUser=iduser;
            this.list=listgoods;    
        }
}
export default DetailEntity;