import AsyncStorage from '@react-native-community/async-storage';

export function setData(dataType: StorageTypes, data: any): Promise<any> {
  const newData = JSON.stringify(data);

  return AsyncStorage.setItem(dataType, newData);
}

export async function getData<T>(dataType: StorageTypes): Promise<T> {
  return JSON.parse(String(await AsyncStorage.getItem(dataType)));
}

export enum StorageTypes {
  TRUKS = '@MyStore:trucks',
}
