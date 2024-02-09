import {ICreateOrdenDto} from "../dtos/orden.dto";
import {ICreateMetodoPagoDto} from "../dtos/metodoPago.dto";

export interface IVenta {
    id_venta: string;
    orden: ICreateOrdenDto;
    metodo_pago: ICreateMetodoPagoDto[];
    fecha_venta: Date;
    importe_total: number;
    salario_del_dia: number;
    inversion_total: number;
    ganancia_bar: number;
    ganancia_alianza: number;
}