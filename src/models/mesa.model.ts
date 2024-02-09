import {ICreateMesaStatusDto} from "../dtos/mesaStatus.dto";
import {ICreateMesaUbicacionDto} from "../dtos/mesaUbicacion.dto";

export interface IMesa {
    id_mesa: string;
    mesa_ubicacion: ICreateMesaUbicacionDto;
    mesa_status: ICreateMesaStatusDto;
    nombre_mesa: string;
}