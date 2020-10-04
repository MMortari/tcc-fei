import React, { useState } from 'react';
import { Text } from 'react-native';

import Input from '../../components/Input';
import InputItem from '../../components/InputItem';
import { Container } from '../TruckWeight/styles';
import { Button } from '../AddTruck/styles';
import { Truck } from '../../service/store/trucks';

export interface DestinyAddressI {
  route: {
    params: {
      truck: Truck;
    };
  };
  navigation: any;
}

const DestinyAddress: React.FC<DestinyAddressI> = ({
  navigation,
  route,
}: DestinyAddressI) => {
  const [address, setAddress] = useState();

  const { truck } = route.params;

  return (
    <Container>
      <InputItem label="Endereço de Destino">
        <Input onChangeText={(e: string) => setAddress(e)} />
      </InputItem>
      <Text>{'\n'}</Text>

      <Button
        title="Continuar"
        onPress={() =>
          navigation.push('TruckSpeed', {
            truck,
            address,
          })
        }
      />
    </Container>
  );
};

export default DestinyAddress;
