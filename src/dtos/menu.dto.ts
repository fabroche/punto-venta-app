import {IIngrediente} from "../models/ingrediente.model";
import {IMenuItem} from "../models/menuItem.model";
import {IMenu} from "../models/menu.model";

export interface ICreateMenuDto
    extends Omit<IMenu, "id_menu" | "menu_item" > {
    menu_item_Id: IMenuItem['id_menu_item'][];
}

export interface IUpdateMenuDto extends Partial<ICreateMenuDto> {
}