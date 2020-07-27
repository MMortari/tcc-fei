import { setData, getData, StorageTypes } from './index';

class TrucksModel {
  async findAll(): Promise<Truck[]> {
    return getData<Truck[]>(StorageTypes.TRUKS);
  }

  async create(data: CreateTruck): Promise<any> {
    const old_data = await this.findAll();

    const new_id = parseInt(String(Date.now() + Math.random()), 10);

    const inset_data = { ...data, id: new_id };

    const new_data = [...old_data, inset_data];

    return setData(StorageTypes.TRUKS, new_data);
  }

  async deleteAll(): Promise<any> {
    return setData(StorageTypes.TRUKS, []);
  }
}

export default new TrucksModel();

export interface Truck {
  id: string;
  name: string;
  color: string;
}

export interface CreateTruck {
  name: string;
  color: string;
}
