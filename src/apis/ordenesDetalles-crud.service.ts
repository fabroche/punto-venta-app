import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IOrdenDetalle} from "../models/ordenDetalle.model";
import {ICreateOrdenDetalleDto, IUpdateOrdenDetalleDto} from "../dtos/ordenDetalle.dto";

export class OrdenDetalleCrudService {
    // singleton flag
    static instance: OrdenDetalleCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IOrdenDetalle>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IOrdenDetalle>) {
        if (OrdenDetalleCrudService.instance === null) {
            OrdenDetalleCrudService.instance = new OrdenDetalleCrudService(httpService);
        }
        return OrdenDetalleCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IOrdenDetalle['id_orden_detalle'], dto: IUpdateOrdenDetalleDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateOrdenDetalleDto) {
        return this._http.create(dto);
    }

    async findOne(id: IOrdenDetalle['id_orden_detalle']) {
        return this._http.findOne(id);
    }
}