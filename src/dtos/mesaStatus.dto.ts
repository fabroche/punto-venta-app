import {IMesaStatus} from "../models/mesaStatus.model";

export interface ICreateMesaStatusDto extends Omit<IMesaStatus, "id_mesa_status"> {
}

export interface IUpdateMesaStatusDto extends Partial<ICreateMesaStatusDto> {
}