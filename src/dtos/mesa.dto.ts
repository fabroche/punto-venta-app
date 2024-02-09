import {IMesa} from "../models/mesa.model";
import {IMesaStatus} from "../models/mesaStatus.model";
import {IMesaUbicacion} from "../models/mesaUbicacion.model";

export interface ICreateMesaDto
    extends Omit<IMesa, "id_mesa" | "mesa_status" | "mesa_ubicacion"> {
    mesa_status_Id: IMesaStatus['id_mesa_status'];
    mesa_ubicacion_Id: IMesaUbicacion['id_mesa_ubicacion'];
}

export interface IUpdateMesaDto extends Partial<ICreateMesaDto> {
}