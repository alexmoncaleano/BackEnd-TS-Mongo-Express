import { Router } from 'express';
import InvoiceController from '../controller/InvoiceController';


class InvoiceRutes{

    public rutaApiInvoice: Router;

    constructor(){
        this.rutaApiInvoice = Router();
        this.configRuteInvoice(); 
    };

    public configRuteInvoice(): void{
        this.rutaApiInvoice.get("/list", InvoiceController.listInvoice);
        this.rutaApiInvoice.post("/create", InvoiceController.createInvoice);
        this.rutaApiInvoice.delete("/delete/:codigo", InvoiceController.deleteInvoice);
        this.rutaApiInvoice.put("/update/:codigo",InvoiceController.updateInvoice);
    }

};

const invoiceRutes = new InvoiceRutes();
export default invoiceRutes.rutaApiInvoice;