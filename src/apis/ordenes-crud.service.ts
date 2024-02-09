import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IOrden} from "../models/orden.model";
import {ICreateOrdenDto, IUpdateOrdenDto} from "../dtos/orden.dto";

export class OrdenCrudService {
    // singleton flag
    static instance: OrdenCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IOrden>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IOrden>) {
        if (OrdenCrudService.instance === null) {
            OrdenCrudService.instance = new OrdenCrudService(httpService);
        }
        return OrdenCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IOrden['id_orden'], dto: IUpdateOrdenDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateOrdenDto) {
        return this._http.create(dto);
    }

    async findOne(id: IOrden['id_orden']) {
        return this._http.findOne(id);
    }
}