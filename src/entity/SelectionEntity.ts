import { GoodsEntity } from './GoodsEntity';
import { UserEntity } from './UserEntity';
export class SelectionEntity{
    public idUser:UserEntity;
    public idGoods:GoodsEntity;
    public amountGoods:number;
    public priceTotal:number;

    constructor(iduser:UserEntity, idgoods:GoodsEntity, amountgoods:number){
        this.idUser=iduser;
        this.idGoods=idgoods;
        this.amountGoods=amountgoods;
        this.priceTotal=0;
        
    }
}
export default SelectionEntity;