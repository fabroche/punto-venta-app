import {ICreateMetodoPagoDto} from "../dtos/metodoPago.dto";

export interface IMetodoPagoDetalle {
    id_metodo_pago_detalle: string;
    metodo_pago: ICreateMetodoPagoDto;
    monto: number;
}