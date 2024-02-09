import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IOrden} from "../models/orden.model";
import {ICreateOrdenDto, IUpdateOrdenDto} from "../dtos/orden.dto";
import {IMenuItemCategory} from "../models/menuItemCategory.model";
import {ICreateMenuItemCategoryDto, IUpdateMenuItemCategoryDto} from "../dtos/menuItemCategory.dto";

export class MenuItemCategoryCrudService {
    // singleton flag
    static instance: MenuItemCategoryCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IMenuItemCategory>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IOrden>) {
        if (MenuItemCategoryCrudService.instance === null) {
            MenuItemCategoryCrudService.instance = new MenuItemCategoryCrudService(httpService);
        }
        return MenuItemCategoryCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IMenuItemCategory['id_menu_item_category'], dto: IUpdateMenuItemCategoryDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateMenuItemCategoryDto) {
        return this._http.create(dto);
    }

    async findOne(id: IMenuItemCategory['id_menu_item_category']) {
        return this._http.findOne(id);
    }
}