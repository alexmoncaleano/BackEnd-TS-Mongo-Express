export class GoodsEntity{
    
    public nameGoods:string;
    public referenceGoods:string;
    public priceGoods:number;
    public descripGoods:string;
    public animalGoods:string;
    public amountGoods:number;
    public stocktakingGoods:number;
    constructor(nomG:string, referG:string, priceG:number, animalG:string, descripG:string, amountG:number, stockG: number ){
        this.nameGoods=nomG;
        this.referenceGoods=referG;
        this.priceGoods=priceG;
        this.animalGoods=animalG;
        this.descripGoods=descripG;
        this.amountGoods=amountG;
        this.stocktakingGoods=stockG;
    }
}
export default GoodsEntity;