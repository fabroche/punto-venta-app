import {ICreateIngredienteDto} from "../dtos/ingrediente.dto";
import {ICreateUnidadMedidaDto} from "../dtos/unidadMedida.dto";

export interface IIngredienteDetalle {
    id_ingrediente_detalles: string;
    ingrediente: ICreateIngredienteDto;
    unidad_medida: ICreateUnidadMedidaDto;
    cantidad: number;
}