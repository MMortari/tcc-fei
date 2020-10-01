import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { RectButton, TouchableHighlight } from 'react-native-gesture-handler';

import TrucksModel, { Truck, CreateTruck } from '../../service/store/trucks';

import { Container, TrucksList, Button } from './styles';
import TruckItem from './TruckItem';

interface ListTrucksI {
  navigation: any;
}

const ListTrucks: React.FC<ListTrucksI> = ({ navigation }: ListTrucksI) => {
  const [trucks, setTrucks] = useState<Truck[]>([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchTrucks();
  }, []);

  const fetchTrucks = async () => {
    // await deleteTrucks();

    const trucksFetched = await TrucksModel.findAll();

    console.log(trucksFetched);

    setTrucks(trucksFetched);
  };

  const handleRefresh = async () => {
    setRefresh(true);

    await fetchTrucks();

    setRefresh(false);
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
      <Button onPress={() => navigation.push('AddTruck')}>
        <Text>Criar Novo</Text>
      </Button>
      <TrucksList
        data={trucks}
        keyExtractor={truck => truck.id}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', color: '#aaa', marginTop: 50 }}>
            Nenhum caminhão cadastrado
          </Text>
        }
        renderItem={({ item }) => (
          <TruckItem
            truck={item}
            onPress={() => navigation.push('TruckSpeed', { truck: item })}
          />
        )}
        refreshing={refresh}
        onRefresh={handleRefresh}
      />
    </Container>
  );
};

export default ListTrucks;
