import {IUnidadMedida} from "../models/unidadMedida.model";

export interface ICreateUnidadMedidaDto extends Omit<IUnidadMedida, "id_unidad_medida"> {
}

export interface IUpdateUnidadMedidaDto extends Partial<ICreateUnidadMedidaDto> {
}