import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IOrden} from "../models/orden.model";
import {ICreateOrdenDto, IUpdateOrdenDto} from "../dtos/orden.dto";
import {IOrdenStatus} from "../models/ordenStatus.model";
import {ICreateOrdenStatusDto, IUpdateOrdenStatusDto} from "../dtos/ordenStatus.dto";

export class OrdenStatusCrudService {
    // singleton flag
    static instance: OrdenStatusCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IOrdenStatus>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IOrdenStatus>) {
        if (OrdenStatusCrudService.instance === null) {
            OrdenStatusCrudService.instance = new OrdenStatusCrudService(httpService);
        }
        return OrdenStatusCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IOrdenStatus['id_orden_status'], dto: IUpdateOrdenStatusDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateOrdenStatusDto) {
        return this._http.create(dto);
    }

    async findOne(id: IOrdenStatus['id_orden_status']) {
        return this._http.findOne(id);
    }
}