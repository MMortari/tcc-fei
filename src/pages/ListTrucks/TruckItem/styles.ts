import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  /* border-bottom-width: 1px;
  border-bottom-color: #ccc; */
  flex-direction: row;
  align-items: center;
`;

export const TruckColor = styled.View<{ color: string }>`
  width: 37px;
  height: 37px;
  background-color: #${props => props.color};
  border-radius: 50px;
  margin: 15px 20px;
`;

export const TruckInfo = styled.Text`
  flex-direction: column-reverse;
`;

export const TruckName = styled.Text`
  font-size: 18px;
`;

export const TruckSmall = styled.Text`
  color: #ababab;
  font-size: 14px;
`;
