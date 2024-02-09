import {IOrden} from "../models/orden.model";
import {IOrdenDetalle} from "../models/ordenDetalle.model";
import {IMenuItem} from "../models/menuItem.model";

export interface ICreateOrdenDetalleDto
    extends Omit<IOrdenDetalle, "id_orden_detalle" | "orden" | "menu_item"> {
    orden_Id: IOrden['id_orden'];
    menu_item_Id: IMenuItem['id_menu_item'];
}

export interface IUpdateOrdenDetalleDto extends Partial<ICreateOrdenDetalleDto> {
}