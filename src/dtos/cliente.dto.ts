import {ICliente} from "../models/cliente.model";

export interface ICreateClienteDto extends Omit<ICliente, "id_cliente"> {
}

export interface IUpdateClienteDto extends Partial<ICreateClienteDto> {
}