import React from 'react';

import { Truck } from '../../../service/store/trucks';

import { Container, TruckColor, TruckInfo, TruckName } from './styles';

interface ITruckItem {
  truck: Truck;
}

const TruckItem: React.FC<ITruckItem> = ({ truck, ...rest }: ITruckItem) => {
  return (
    <Container {...rest}>
      <TruckColor color="5D9CEC" />
      <TruckInfo>
        <TruckName>{truck.name}</TruckName>
        {'\n'}
        {/* <TruckSmall>
          {truck.weight}ton - {truck.coefficient}
        </TruckSmall> */}
      </TruckInfo>
    </Container>
  );
};

export default TruckItem;
