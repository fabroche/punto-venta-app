import {IMesero} from "../models/mesero.model";

export interface ICreateMeseroDto extends Omit<IMesero, "id_mesero"> {
}

export interface IUpdateMeseroDto extends Partial<ICreateMeseroDto> {
}