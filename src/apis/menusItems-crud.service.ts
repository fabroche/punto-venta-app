import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IOrden} from "../models/orden.model";
import {ICreateOrdenDto, IUpdateOrdenDto} from "../dtos/orden.dto";
import {IMenuItem} from "../models/menuItem.model";
import {IUpdateMenuDto} from "../dtos/menu.dto";
import {ICreateMenuItemDto} from "../dtos/menuItem.dto";

export class MenusItemsCrudService {
    // singleton flag
    static instance: MenusItemsCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IMenuItem>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IMenuItem>) {
        if (MenusItemsCrudService.instance === null) {
            MenusItemsCrudService.instance = new MenusItemsCrudService(httpService);
        }
        return MenusItemsCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IMenuItem['id_menu_item'], dto: IUpdateMenuDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateMenuItemDto) {
        return this._http.create(dto);
    }

    async findOne(id: IOrden['id_orden']) {
        return this._http.findOne(id);
    }
}