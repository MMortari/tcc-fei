import React, { useState } from 'react';
import { Text } from 'react-native';

import Input from '../../components/Input';
import InputItem from '../../components/InputItem';
import { Truck } from '../../service/store/trucks';
import { Button } from '../AddTruck/styles';

import { Container } from './styles';

export interface TruckWeightI {
  route: {
    params: {
      truck: Truck;
    };
  };
  navigation: any;
}

const TruckWeight: React.FC<TruckWeightI> = ({
  route,
  navigation,
}: TruckWeightI) => {
  const [truckWeight, setTruckWeight] = useState('');

  const { truck } = route.params;

  return (
    <Container>
      <InputItem label="Carga (Kg)">
        <Input onChangeText={(e: string) => setTruckWeight(e)} />
      </InputItem>
      <Text>{'\n'}</Text>

      <Button
        title="Continuar"
        onPress={() =>
          navigation.push('DestinyAddress', {
            truck: { ...truck, weight: truckWeight },
          })
        }
      />
    </Container>
  );
};

export default TruckWeight;
