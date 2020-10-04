import { setData, getData, StorageTypes } from './index';

class TrucksModel {
  async findAll(): Promise<Truck[]> {
    return getData<Truck[]>(StorageTypes.TRUKS);
  }

  async createMany(data: CreateTruck[]): Promise<any> {
    return data.reduce((prev, truck) => {
      return prev.then(() => {
        return this.create(truck);
      });
    }, Promise.resolve());
  }

  async create(data: CreateTruck): Promise<Truck> {
    const old_data = await this.findAll();

    const new_id = parseInt(String(Date.now() + Math.random()), 10);

    const inset_data: Truck = { ...data, id: new_id };

    const new_data = [...old_data, inset_data];

    await setData(StorageTypes.TRUKS, new_data);

    return inset_data;
  }

  async deleteAll(): Promise<any> {
    return setData(StorageTypes.TRUKS, []);
  }
}

export default new TrucksModel();

export interface Truck {
  id: number;
  name: string;
  color?: string;
  weight?: string;
  coefficient: string;
}

export type CreateTruck = Omit<Truck, 'id'>;
