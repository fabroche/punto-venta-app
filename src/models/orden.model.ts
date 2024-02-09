import {ICreateOrdenStatusDto} from "../dtos/ordenStatus.dto";
import {ICreateMesaDto} from "../dtos/mesa.dto";
import {ICreateMeseroDto} from "../dtos/mesero.dto";
import {ICreateClienteDto} from "../dtos/cliente.dto";

export interface IOrden {
    id_orden: string;
    orden_status: ICreateOrdenStatusDto;
    mesa: ICreateMesaDto;
    mesero: ICreateMeseroDto;
    cliente: ICreateClienteDto;
    fecha_orden: Date;
}