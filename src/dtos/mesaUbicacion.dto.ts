import {IMesaUbicacion} from "../models/mesaUbicacion.model";

export interface ICreateMesaUbicacionDto extends Omit<IMesaUbicacion, "id_mesa_ubicacion"> {
}

export interface IUpdateMesaUbicacionDto extends Partial<ICreateMesaUbicacionDto> {
}