import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Truck } from '../../service/store/trucks';
import { Container, Speed, TruckName, Icons } from './styles';

export interface TruckSpeedI {
  route: {
    params: {
      truck: Truck;
    };
  };
}

const TruckSpeed: React.FC<TruckSpeedI> = ({ route }: TruckSpeedI) => {
  const { truck } = route.params;

  return (
    <Container>
      <TruckName>{truck.name}</TruckName>
      <Speed>76 km</Speed>
      <Icons>
        <Icon name="wifi" size={20} />
        {'\b'}
        {'\b'}
        {'\b'}
        <Icon name="map-marker" size={20} />
      </Icons>
    </Container>
  );
};

export default TruckSpeed;
