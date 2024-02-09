import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IMetodoPago} from "../models/metodoPago.model";
import {ICreateMetodoPagoDto, IUpdateMetodoPagoDto} from "../dtos/metodoPago.dto";

export class MetodoPagoCrudService {
    // singleton flag
    static instance: MetodoPagoCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IMetodoPago>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IMetodoPago>) {
        if (MetodoPagoCrudService.instance === null) {
            MetodoPagoCrudService.instance = new MetodoPagoCrudService(httpService);
        }
        return MetodoPagoCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IMetodoPago['id_metodo_pago'], dto: IUpdateMetodoPagoDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateMetodoPagoDto) {
        return this._http.create(dto);
    }

    async findOne(id: IMetodoPago['id_metodo_pago']) {
        return this._http.findOne(id);
    }
}