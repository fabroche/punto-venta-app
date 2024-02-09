import {ICreateMenuItemDto} from "../dtos/menuItem.dto";

export interface IMenu {
    id_menu: string;
    menu_name: string;
    menu_item: ICreateMenuItemDto[];
}