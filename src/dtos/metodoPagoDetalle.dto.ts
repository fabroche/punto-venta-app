import {IMetodoPagoDetalle} from "../models/metodoPagoDetalle.model";
import {IMetodoPago} from "../models/metodoPago.model";

export interface ICreateMetodoPagoDetalleDto
    extends Omit<IMetodoPagoDetalle, "id_metodo_pago_detalle" | "metodo_pago"> {
    metodo_pago_Id: IMetodoPago['id_metodo_pago'];
}

export interface IUpdateMetodoPagoDetalleDto extends Partial<ICreateMetodoPagoDetalleDto> {
}