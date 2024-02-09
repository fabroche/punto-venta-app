import axios from 'axios';
import { BaseHttpService } from './base-http.service';
import {IMesa} from "../models/mesa.model";
import {ICreateMesaDto, IUpdateMesaDto} from "../dtos/mesa.dto";

export class MesaCrudService {
    // singleton flag
    static instance: MesaCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IMesa>) {}

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IMesa>) {
        if (MesaCrudService.instance === null) {
            MesaCrudService.instance = new MesaCrudService(httpService);
        }
        return MesaCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IMesa['id_mesa'], dto: IUpdateMesaDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateMesaDto) {
        return this._http.create(dto);
    }

    async findOne(id: IMesa['id_mesa']) {
        return this._http.findOne(id);
    }
}