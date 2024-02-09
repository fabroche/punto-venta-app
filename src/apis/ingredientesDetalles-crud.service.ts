import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {IIngredienteDetalle} from "../models/ingredienteDetalle.model";
import {ICreateIngredienteDetalleDto, IUpdateIngredienteDetalleDto} from "../dtos/ingredienteDetalle.dto";

export class IngredienteDetalleCrudService {
    // singleton flag
    static instance: IngredienteDetalleCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<IIngredienteDetalle>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<IIngredienteDetalle>) {
        if (IngredienteDetalleCrudService.instance === null) {
            IngredienteDetalleCrudService.instance = new IngredienteDetalleCrudService(httpService);
        }
        return IngredienteDetalleCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: IIngredienteDetalle['id_ingrediente_detalles'], dto: IUpdateIngredienteDetalleDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateIngredienteDetalleDto) {
        return this._http.create(dto);
    }

    async findOne(id: IIngredienteDetalle['id_ingrediente_detalles']) {
        return this._http.findOne(id);
    }
}