import {IIngredienteDetalle} from "../models/ingredienteDetalle.model";
import {IIngrediente} from "../models/ingrediente.model";
import {IUnidadMedida} from "../models/unidadMedida.model";

export interface ICreateIngredienteDetalleDto
    extends Omit<IIngredienteDetalle, "id_ingrediente_detalles" | "ingrediente" | "unidad_medida"> {
    ingrediente_Id: IIngrediente['id_ingrediente'];
    unidad_medida_Id: IUnidadMedida['id_unidad_medida'];
}

export interface IUpdateIngredienteDetalleDto extends Partial<ICreateIngredienteDetalleDto> {
}