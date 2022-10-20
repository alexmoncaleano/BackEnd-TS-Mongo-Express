import { Request, Response } from "express";
import InvoiceDao from "../dao/InvoiceDao";

class InvoiceController extends InvoiceDao {
  public listInvoice(req: Request, res: Response): void {
    InvoiceController.listInvoice(res);
  }
  public createInvoice(req: Request, res: Response): void {
    InvoiceController.createInvoice(req.body, res); //el res es un objeto de tipo respons, es la capacidad que tiene el backend de dar una respuesta.
  }
  public deleteInvoice(req: Request, res: Response): void {
    InvoiceController.deleteInvoice(req.params.codigo, res);
  }
  public updateInvoice(req: Request, res: Response): void {
    InvoiceController.updateInvoice(req.params.codigo, req.body, res);
  }
}
const invoiceController = new InvoiceController();
export default invoiceController;
