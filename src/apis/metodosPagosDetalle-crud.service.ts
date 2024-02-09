import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IMetodoPagoDetalle} from "../models/metodoPagoDetalle.model";
import {ICreateMetodoPagoDetalleDto, IUpdateMetodoPagoDetalleDto} from "../dtos/metodoPagoDetalle.dto";

export class MetodoPagoDetalleCrudService {
    // singleton flag
    static instance: MetodoPagoDetalleCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IMetodoPagoDetalle>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IMetodoPagoDetalle>) {
        if (MetodoPagoDetalleCrudService.instance === null) {
            MetodoPagoDetalleCrudService.instance = new MetodoPagoDetalleCrudService(httpService);
        }
        return MetodoPagoDetalleCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IMetodoPagoDetalle['id_metodo_pago_detalle'], dto: IUpdateMetodoPagoDetalleDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateMetodoPagoDetalleDto) {
        return this._http.create(dto);
    }

    async findOne(id: IMetodoPagoDetalle['id_metodo_pago_detalle']) {
        return this._http.findOne(id);
    }
}