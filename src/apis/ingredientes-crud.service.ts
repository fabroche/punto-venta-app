import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IOrden} from "../models/orden.model";
import {ICreateOrdenDto, IUpdateOrdenDto} from "../dtos/orden.dto";
import {IIngrediente} from "../models/ingrediente.model";
import {ICreateIngredienteDto, IUpdateIngredienteDto} from "../dtos/ingrediente.dto";

export class IngredienteCrudService {
    // singleton flag
    static instance: IngredienteCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IIngrediente>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IIngrediente>) {
        if (IngredienteCrudService.instance === null) {
            IngredienteCrudService.instance = new IngredienteCrudService(httpService);
        }
        return IngredienteCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IIngrediente['id_ingrediente'], dto: IUpdateIngredienteDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateIngredienteDto) {
        return this._http.create(dto);
    }

    async findOne(id: IIngrediente['id_ingrediente']) {
        return this._http.findOne(id);
    }
}