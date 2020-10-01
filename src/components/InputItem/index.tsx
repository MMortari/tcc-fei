import React from 'react';
import { View } from 'react-native';

import { Label } from './styles';

interface InputItemRequest {
  children?: React.ReactNode;
  label: string;
}

const InputItem: React.FC<InputItemRequest> = ({
  label,
  children,
}: InputItemRequest) => {
  return (
    <View>
      <Label>{label}</Label>
      {children}
    </View>
  );
};

export default InputItem;
