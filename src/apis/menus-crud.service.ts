import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IOrden} from "../models/orden.model";
import {ICreateOrdenDto, IUpdateOrdenDto} from "../dtos/orden.dto";
import {IMenu} from "../models/menu.model";
import {ICreateMenuDto, IUpdateMenuDto} from "../dtos/menu.dto";

export class MenuCrudService {
    // singleton flag
    static instance: MenuCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IMenu>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IMenu>) {
        if (MenuCrudService.instance === null) {
            MenuCrudService.instance = new MenuCrudService(httpService);
        }
        return MenuCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IMenu['id_menu'], dto: IUpdateMenuDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateMenuDto) {
        return this._http.create(dto);
    }

    async findOne(id: IMenu['id_menu']) {
        return this._http.findOne(id);
    }
}