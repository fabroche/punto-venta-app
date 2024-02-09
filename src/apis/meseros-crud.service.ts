import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IMesero} from "../models/mesero.model";
import {ICreateMeseroDto, IUpdateMeseroDto} from "../dtos/mesero.dto";

export class MeseroCrudService {
    // singleton flag
    static instance: MeseroCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IMesero>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IMesero>) {
        if (MeseroCrudService.instance === null) {
            MeseroCrudService.instance = new MeseroCrudService(httpService);
        }
        return MeseroCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IMesero['id_mesero'], dto: IUpdateMeseroDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateMeseroDto) {
        return this._http.create(dto);
    }

    async findOne(id: IMesero['id_mesero']) {
        return this._http.findOne(id);
    }
}