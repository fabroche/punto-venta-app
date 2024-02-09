import {IMetodoPago} from "../models/metodoPago.model";

export interface ICreateMetodoPagoDto extends Omit<IMetodoPago, "id_metodo_pago"> {
}

export interface IUpdateMetodoPagoDto extends Partial<ICreateMetodoPagoDto> {
}