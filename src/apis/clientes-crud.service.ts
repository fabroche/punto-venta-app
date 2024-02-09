import axios from 'axios';
import {BaseHttpService} from './base-http.service';
import {ICliente} from "../models/cliente.model";
import {ICreateClienteDto, IUpdateClienteDto} from "../dtos/cliente.dto";

export class ClienteCrudService {
    // singleton flag
    static instance: ClienteCrudService | null = null;

    // singleton private constructor
    private constructor(private _http: BaseHttpService<ICliente>) {
    }

    // singleton static method -> instence maker
    static getService(httpService: BaseHttpService<ICliente>) {
        if (ClienteCrudService.instance === null) {
            ClienteCrudService.instance = new ClienteCrudService(httpService);
        }
        return ClienteCrudService.instance;
    }

    async getAll() {
        return this._http.getAll();
    }

    async update(id: ICliente['id_cliente'], dto: IUpdateClienteDto) {
        return this._http.update(id, dto);
    }

    async create(dto: ICreateClienteDto) {
        return this._http.create(dto);
    }

    async findOne(id: ICliente['id_cliente']) {
        return this._http.findOne(id);
    }
}