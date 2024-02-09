import {ICreateOrdenDto} from "../dtos/orden.dto";
import {ICreateMenuItemDto} from "../dtos/menuItem.dto";

export interface IOrdenDetalle {
    id_orden_detalle: string;
    orden: ICreateOrdenDto;
    menu_item: ICreateMenuItemDto;
    cantidad: number;
    costo_menu_item_al_momento_de_la_venta: number;
    precio_menu_item_al_momento_de_la_venta: number;
}