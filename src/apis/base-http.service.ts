import axios from 'axios';

export class BaseHttpService<TypeClass> {
    constructor(protected _url: string) {}

    get url() {
        return this._url;
    }

    async getAll() {
        const { data } = await axios.get<TypeClass[]>(this._url);
        return data;
    }

    async update<ID, DTO>(id: ID, changes: DTO) {
        const { data } = await axios.put<TypeClass>(`${this._url}/${id}`, changes);
        return data;
    }

    async create<DTO>(dto: DTO) {
        const { data } = await axios.post<TypeClass>(this._url, dto);
        return data;
    }

    async findOne<ID>(id: ID) {
        const { data } = await axios.get<TypeClass>(`${this._url}/${id}`);
        return data;
    }
}