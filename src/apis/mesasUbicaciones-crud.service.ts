import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IOrden} from "../models/orden.model";
import {ICreateOrdenDto, IUpdateOrdenDto} from "../dtos/orden.dto";
import {IMesaUbicacion} from "../models/mesaUbicacion.model";
import {ICreateMesaUbicacionDto, IUpdateMesaUbicacionDto} from "../dtos/mesaUbicacion.dto";

export class MesaUbicacionCrudService {
    // singleton flag
    static instance: MesaUbicacionCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IMesaUbicacion>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IMesaUbicacion>) {
        if (MesaUbicacionCrudService.instance === null) {
            MesaUbicacionCrudService.instance = new MesaUbicacionCrudService(httpService);
        }
        return MesaUbicacionCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IMesaUbicacion['id_mesa_ubicacion'], dto: IUpdateMesaUbicacionDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateMesaUbicacionDto) {
        return this._http.create(dto);
    }

    async findOne(id: IMesaUbicacion['id_mesa_ubicacion']) {
        return this._http.findOne(id);
    }
}