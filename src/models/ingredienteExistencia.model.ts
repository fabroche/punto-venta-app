import {ICreateIngredienteDto} from "../dtos/ingrediente.dto";
import {ICreateUnidadMedidaDto} from "../dtos/unidadMedida.dto";

export interface IIngredienteExistencia {
    id_ingrediente_existencia: string;
    ingrediente: ICreateIngredienteDto;
    unidad_medida: ICreateUnidadMedidaDto;
    cantidad: number;
}