import {IOrden} from "../models/orden.model";
import {IOrdenDetalle} from "../models/ordenDetalle.model";
import {IMenuItem} from "../models/menuItem.model";
import {IVenta} from "../models/venta.model";
import {IMetodoPago} from "../models/metodoPago.model";

export interface ICreateVentaDto
    extends Omit<IVenta, "id_venta" | "orden" | "metodo_pago"> {
    orden_Id: IOrden['id_orden'];
    metodo_pago_Id: IMetodoPago['id_metodo_pago'][];
}

export interface IUpdateVentaDto extends Partial<ICreateVentaDto> {
}