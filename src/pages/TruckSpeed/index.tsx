import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Truck } from '../../service/store/trucks';
import { Container, Speed, TruckName, Icons, SpeedSuggestion } from './styles';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 350,
    height: 350,
    // resizeMode: 'stretch',
  },
});

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

      <Image
        style={styles.tinyLogo}
        source={require('../../../images/Waze.png')}
      />

      <SpeedSuggestion>
        Velocidade Sugerida:
        <Text>{'\n'}</Text>
        <Speed>76 km/h</Speed>
      </SpeedSuggestion>
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
