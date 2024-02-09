import {ICreateIngredienteDto} from "../dtos/ingrediente.dto";
import {ICreateMenuItemCategoryDto} from "../dtos/menuItemCategory.dto";

export interface IMenuItem {
    id_menu_item: string;
    menu_item_category: ICreateMenuItemCategoryDto;
    menu_item_name: string;
    menu_item_cost: number;
    menu_item_price: number;
    ingredientes: ICreateIngredienteDto[]
}