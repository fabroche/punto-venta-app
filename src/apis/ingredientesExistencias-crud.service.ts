import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IIngredienteExistencia} from "../models/ingredienteExistencia.model";
import {ICreateIngredienteExistenciaDto, IUpdateIngredienteExistenciaDto} from "../dtos/ingredienteExistencia.dto";

export class IngredienteExistenciaCrudService {
    // singleton flag
    static instance: IngredienteExistenciaCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IIngredienteExistencia>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IIngredienteExistencia>) {
        if (IngredienteExistenciaCrudService.instance === null) {
            IngredienteExistenciaCrudService.instance = new IngredienteExistenciaCrudService(httpService);
        }
        return IngredienteExistenciaCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IIngredienteExistencia['id_ingrediente_existencia'], dto: IUpdateIngredienteExistenciaDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateIngredienteExistenciaDto) {
        return this._http.create(dto);
    }

    async findOne(id: IIngredienteExistencia['id_ingrediente_existencia']) {
        return this._http.findOne(id);
    }
}