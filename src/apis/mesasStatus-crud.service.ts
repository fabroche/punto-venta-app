import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IMesaStatus} from "../models/mesaStatus.model";
import {ICreateMesaStatusDto, IUpdateMesaStatusDto} from "../dtos/mesaStatus.dto";

export class MesaStatusCrudService {
    // singleton flag
    static instance: MesaStatusCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IMesaStatus>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IMesaStatus>) {
        if (MesaStatusCrudService.instance === null) {
            MesaStatusCrudService.instance = new MesaStatusCrudService(httpService);
        }
        return MesaStatusCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IMesaStatus['id_mesa_status'], dto: IUpdateMesaStatusDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateMesaStatusDto) {
        return this._http.create(dto);
    }

    async findOne(id: IMesaStatus['id_mesa_status']) {
        return this._http.findOne(id);
    }
}