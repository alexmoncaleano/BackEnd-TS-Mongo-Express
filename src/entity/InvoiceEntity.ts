import { GoodsEntity } from './GoodsEntity';
export class InvoiceEntity{
    
    public idInvoice:string;
    public idUser:string;
    public idGoodsOne:GoodsEntity;
    public idGoodsTwo:GoodsEntity;
    public totalPrice:number;
    public tax:number;

    constructor(idinvoice:string, iduser:string, idgoodsone:GoodsEntity, idgoodstwo:GoodsEntity, totalprice:number, Tax:number){
        this.idInvoice=idinvoice;
        this.idUser=iduser;
        this.idGoodsOne=idgoodsone;
        this.idGoodsTwo=idgoodstwo;
        this.totalPrice=totalprice;
        this.tax=Tax;
    }
}
export default InvoiceEntity;