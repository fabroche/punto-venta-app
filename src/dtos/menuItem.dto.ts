import {IIngrediente} from "../models/ingrediente.model";
import {IMenuItem} from "../models/menuItem.model";
import {IMenuItemCategory} from "../models/menuItemCategory.model";

export interface ICreateMenuItemDto
    extends Omit<IMenuItem, "id_menu_item" | "ingredientes" | "menu_item_category"> {
    ingredientes_Id: IIngrediente['id_ingrediente'][];
    menu_item_category_Id: IMenuItemCategory['id_menu_item_category'];
}

export interface IUpdateMenuItemDto extends Partial<ICreateMenuItemDto> {
}