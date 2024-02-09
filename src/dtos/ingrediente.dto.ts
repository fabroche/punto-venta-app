import {IIngrediente} from "../models/ingrediente.model";

export interface ICreateIngredienteDto extends Omit<IIngrediente, "id_ingrediente"> {
}

export interface IUpdateIngredienteDto extends Partial<ICreateIngredienteDto> {
}