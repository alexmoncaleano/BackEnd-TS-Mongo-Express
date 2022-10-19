export class GoodsEntity{
    
    public nameGoods:string;
    public referenceGoods:string;
    public priceGoods:number;
    public descripGoods:string;
    public animalGoods:string;
    constructor(nomG:string, referG:string, priceG:number, animalG:string, descripG:string){
        this.nameGoods=nomG;
        this.referenceGoods=referG;
        this.priceGoods=priceG;
        this.animalGoods=animalG;
        this.descripGoods=descripG;
    }
}
export default GoodsEntity;