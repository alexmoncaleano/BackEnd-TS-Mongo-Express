import InvoiceScheme from "../scheme/InvoiceScheme";
import { Response } from "express";

class InvoiceDao {
  protected static async listInvoice(res: Response): Promise<any> {
    const datos = await InvoiceScheme.find().sort({ _id: -1 });
    res.status(200).json(datos);
  }
  protected static async createInvoice(
    parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await InvoiceScheme.findOne(parametros);
    if (existe) {
      res.status(400).json({ respuesta: "La Factura ya existe" });
    } else {
      const objInvoice = new InvoiceScheme(parametros);
      objInvoice.save((miError, miObjeto) => {
        if (miError) {
          res.status(400).json({ respuesta: "No se puede crear la factura" });
        } else {
          res.status(200).json({
            respuesta: "Factura creada exitosamente",
            codigo: miObjeto._id,
          });
        }
      });
    }
  }
  public static async deleteInvoice(
    parametro: any,
    res: Response
  ): Promise<any> {
    const existe = await InvoiceScheme.findById(parametro).exec();
    if (existe) {
      InvoiceScheme.findOneAndDelete({ parametro }, (miError: any, miobjeto: any) => {
        if (miError) {
          res
            .status(400)
            .json({ respuesta: "No se puede eliminar la Factura" });
        } else {
          res.status(200).json({
            respuesta: "Factura eliminada correctamente",
            eliminado: miobjeto.deletedCount,
          });
        }
      });
    } else {
      res.status(400).json({ respuesta: "No existe la Factura" });
    }
  }
  protected static async updateInvoice(
    codigo: string,
    parametros: any,
    res: Response
  ): Promise<any> {
    //const existe = await UserScheme.findById(codigo).exec();
    //const existe = await UserSheme.findById({_id:codigo});
    const existe = await InvoiceScheme.findById(codigo).exec();
    if (existe) {
      InvoiceScheme.findByIdAndUpdate(
        { _id: codigo },
        { $set: parametros },
        (miError: any, miObjeto: any) => {
          if (miError) {
            res
              .status(400)
              .json({ Respuesta: "No se puede actualizar la factura" });
          } else {
            res.status(200).json({
              Respuesta: "Factura actualizado",
              Antiguo: miObjeto,
              Nuevo: parametros,
            });
          }
        }
      );
    } else {
      res.status(400).json({ Respuesta: "La factura a actualizar no existe" });
    }
  }
}

export default InvoiceDao;
