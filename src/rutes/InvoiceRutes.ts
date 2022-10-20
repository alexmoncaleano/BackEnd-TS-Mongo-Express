import { Router } from 'express';
import invoiceController from '../controller/InvoiceController';


class InvoiceRutes{

    public rutaApiInvoice: Router;

    constructor(){
        this.rutaApiInvoice = Router();
        this.configRuteInvoice = (); 
    };

    public configRuteInvoice(): void{
        this.rutaApiInvoice.get("/list", invoiceController.listInvoice);
        this.rutaApiInvoice.post("/create", invoiceController.createInvoice);
        this.rutaApiInvoice.delete("/delete/:codigo", invoiceController.deleteInvoice);
        this.rutaApiInvoice.put("/update/:codigo",invoiceController.updateInvoice);
    }

};

const invoiceRutes = new InvoiceRutes();
export default invoiceRutes.rutaApiInvoice;