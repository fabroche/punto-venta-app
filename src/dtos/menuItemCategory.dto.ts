import {ICliente} from "../models/cliente.model";
import {IMenuItemCategory} from "../models/menuItemCategory.model";

export interface ICreateMenuItemCategoryDto extends Omit<IMenuItemCategory, "id_menu_item_category"> {
}

export interface IUpdateMenuItemCategoryDto extends Partial<ICreateMenuItemCategoryDto> {
}