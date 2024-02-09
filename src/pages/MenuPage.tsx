import {useState, useEffect} from "react";
import {BaseHttpService} from "../apis/base-http.service";
import {IMesa} from "../models/mesa.model";
import {MesaCrudService} from "../apis/mesas-crud.service";
import {IOrden} from "../models/orden.model";
import {OrdenCrudService} from "../apis/ordenes-crud.service";
import {ICliente} from "../models/cliente.model";
import {ClienteCrudService} from "../apis/clientes-crud.service";

interface Props {

}

export const MenuPage: React.FC<Props> = ({}) => {
    // creando servicios
    const urlMesas = 'http://127.0.0.1:8000/restaurant/api/v1/mesas/';
    const baseServiceMesa = new BaseHttpService<IMesa>(urlMesas);
    const mesaService = MesaCrudService.getService(baseServiceMesa);

    const urlOrdenes = 'http://127.0.0.1:8000/restaurant/api/v1/ordenes/';
    const baseServiceOrden = new BaseHttpService<IOrden>(urlOrdenes);
    const ordenService = OrdenCrudService.getService(baseServiceOrden);

    const urlClientes = 'http://127.0.0.1:8000/restaurant/api/v1/clientes/';
    const baseServiceCliente = new BaseHttpService<IOrden>(urlClientes);
    const clienteService = ClienteCrudService.getService(baseServiceCliente);
    // const baseService = new ProductHttpService(urlProducts);


    const [mesas, setMesas] = useState<IMesa[]>([]);
    const [ordenes, setOrdenes] = useState<IOrden[]>([]);
    const [clientes, setClientes] = useState<ICliente[]>([]);

    useEffect(() => {
        (async () => {
            const mesas = await mesaService.getAll()
            setMesas(mesas)
            const ordenes = await ordenService.getAll()
            setOrdenes(ordenes)
            const clientes = await clienteService.getAll()
            setClientes(clientes)
        })();
    }, []);
    return (
        <section className="section-menu">
            <br/>
            <h2>Menu Page</h2>
            <br/>
            <h3>Mesas</h3>
            <hr/>
            {
                mesas.length > 0 ?
                    mesas.map((mesa) => (
                        <div key={mesa.id_mesa}>
                            <p>{mesa.nombre_mesa}</p>
                            <p>{mesa.mesa_status.mesa_status}</p>
                            <p>{mesa.mesa_ubicacion.mesa_ubicacion}</p>
                            <hr/>
                        </div>
                    )) : <p>No hay mesas Registradas aun</p>
            }
            <br/>
            <h3>Ordenes</h3>
            <hr/>
            {
                ordenes.length > 0 ?
                    ordenes.map((orden) => (
                        <div key={orden.id_orden}>
                            <p>{orden.fecha_orden}</p>
                            <p>{orden.orden_status.orden_status}</p>
                            <p>{orden.mesa.nombre_mesa}</p>
                            <hr/>
                        </div>
                    )) : <p>No hay ordenes registradas aun</p>
            }
            <br/>
            <h3>Clientes</h3>
            <hr/>
            {
                clientes.length > 0 ?
                    clientes.map((cliente) => (
                        <div key={cliente.id_cliente}>
                            <p>{cliente.id_cliente}</p>
                            <p>{cliente.nombre_cliente}</p>
                            <p>{cliente.numero_telefono}</p>
                            <hr/>
                        </div>
                    )) : <p>No hay clientes registrados aun</p>
            }
        </section>
    );
};