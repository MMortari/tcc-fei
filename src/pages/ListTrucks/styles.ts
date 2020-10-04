import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Truck } from '../../service/store/trucks';

export const Container = styled.View``;

export const TrucksList = styled(FlatList as new () => FlatList<Truck>)``;

export const Button = styled(RectButton)`
  text-align: center;
  padding: 15px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  margin: 10px;
`;
