import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Truck } from '../../service/store/trucks';

export const Container = styled.View`
  /* margin: 10px; */
`;

export const TrucksList = styled(FlatList as new () => FlatList<Truck>)``;
