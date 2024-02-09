import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IOrden} from "../models/orden.model";
import {ICreateOrdenDto, IUpdateOrdenDto} from "../dtos/orden.dto";
import {IVenta} from "../models/venta.model";
import {ICreateVentaDto, IUpdateVentaDto} from "../dtos/venta.dto";

export class VentasCrudService {
    // singleton flag
    static instance: VentasCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IVenta>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IVenta>) {
        if (VentasCrudService.instance === null) {
            VentasCrudService.instance = new VentasCrudService(httpService);
        }
        return VentasCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IVenta['id_venta'], dto: IUpdateVentaDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateVentaDto) {
        return this._http.create(dto);
    }

    async findOne(id: IVenta['id_venta']) {
        return this._http.findOne(id);
    }
}