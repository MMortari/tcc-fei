import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import TrucksModel, { Truck, CreateTruck } from '../../service/store/trucks';

import { Container, TrucksList, Subtitle, Button } from './styles';
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
    const trucksFetched = await TrucksModel.findAll();

    if (!trucksFetched.length) {
      setNewTrucks();
      return;
    }

    setTrucks(trucksFetched);
  };

  const handleRefresh = async () => {
    setRefresh(true);

    await fetchTrucks();

    setRefresh(false);
  };

  const setNewTrucks = async () => {
    const data: CreateTruck[] = [
      {
        name: 'Freightliner C120',
        coefficient: '0.7',
      },
      {
        name: 'Mercedes Actros',
        coefficient: '0.7',
      },
      {
        name: 'Mercedes Axor',
        coefficient: '0.7',
      },
      {
        name: 'Mercedes Atron',
        coefficient: '0.7',
      },
      {
        name: 'Mercedes Accelo',
        coefficient: '0.7',
      },
      {
        name: 'Mercedes Atego',
        coefficient: '0.7',
      },
      {
        name: 'Scania R440',
        coefficient: '0.7',
      },
      {
        name: 'Scania R520',
        coefficient: '0.7',
      },
      {
        name: 'Scania P320',
        coefficient: '0.7',
      },
    ];

    await TrucksModel.createMany(data);

    fetchTrucks();
  };

  const deleteTrucks = async () => {
    await TrucksModel.deleteAll();

    fetchTrucks();
  };

  return (
    <Container>
      {/* <Button onPress={() => deleteTrucks()}>
        <Text>Criar Novo</Text>
      </Button> */}
      <Subtitle>Selecione o seu veículo: </Subtitle>
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
            onPress={() => navigation.push('TruckWeight', { truck: item })}
          />
        )}
        refreshing={refresh}
        onRefresh={handleRefresh}
      />
    </Container>
  );
};

export default ListTrucks;
