import {IOrden} from "../models/orden.model";
import {IOrdenStatus} from "../models/ordenStatus.model";
import {ICliente} from "../models/cliente.model";
import {IMesero} from "../models/mesero.model";
import {IMesa} from "../models/mesa.model";

export interface ICreateOrdenDto
    extends Omit<IOrden, "id_orden" | "orden_status" | "cliente" | "mesero" | "mesa"> {
    orden_status_Id: IOrdenStatus['id_orden_status'];
    cliente_Id: ICliente['id_cliente'];
    mesero_id: IMesero['id_mesero'];
    mesa_id: IMesa['id_mesa'];
}

export interface IUpdateOrdenDto extends Partial<ICreateOrdenDto> {
}