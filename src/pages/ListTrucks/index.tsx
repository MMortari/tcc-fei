import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import TrucksModel, { Truck, CreateTruck } from '../../service/store/trucks';

import { Container, TrucksList } from './styles';
import TruckItem from './TruckItem';

const ListTrucks: React.FC = () => {
  const [trucks, setTrucks] = useState<Truck[]>([]);

  useEffect(() => {
    fetchTrucks();
  }, []);

  const fetchTrucks = async () => {
    // await setNewTrucks();

    const trucksFetched = await TrucksModel.findAll();

    console.log(trucksFetched);

    setTrucks(trucksFetched);
  };

  const setNewTrucks = async () => {
    const data: CreateTruck = {
      name: 'Caminhao 4',
      color: '5D9CEC',
    };

    await TrucksModel.create(data);

    fetchTrucks();
  };

  const deleteTrucks = async () => {
    await TrucksModel.deleteAll();

    fetchTrucks();
  };

  return (
    <Container>
      <TrucksList
        data={trucks}
        keyExtractor={truck => truck.id}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', color: '#aaa', marginTop: 50 }}>
            Nenhum caminhão cadastrado
          </Text>
        }
        renderItem={({ item }) => <TruckItem truck={item} />}
      />
    </Container>
  );
};

export default ListTrucks;
