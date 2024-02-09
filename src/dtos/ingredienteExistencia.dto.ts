import {IIngrediente} from "../models/ingrediente.model";
import {IUnidadMedida} from "../models/unidadMedida.model";
import {IIngredienteExistencia} from "../models/ingredienteExistencia.model";

export interface ICreateIngredienteExistenciaDto
    extends Omit<IIngredienteExistencia, "id_ingrediente_existencia" | "ingrediente" | "unidad_medida"> {
    ingrediente_Id: IIngrediente['id_ingrediente'];
    unidad_medida_Id: IUnidadMedida['id_unidad_medida'];
}

export interface IUpdateIngredienteExistenciaDto extends Partial<ICreateIngredienteExistenciaDto> {
}