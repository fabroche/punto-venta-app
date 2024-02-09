import {IOrdenStatus} from "../models/ordenStatus.model";

export interface ICreateOrdenStatusDto extends Omit<IOrdenStatus, "id_orden_status"> {
}

export interface IUpdateOrdenStatusDto extends Partial<ICreateOrdenStatusDto> {
}