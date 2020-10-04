import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import ListTrucks from '../pages/ListTrucks';
import AddTruck from '../pages/AddTruck';
import TruckSpeed from '../pages/TruckSpeed';
import TruckWeight from '../pages/TruckWeight';
import DestinyAddress from '../pages/DestinyAddress';

const Truck = createStackNavigator();

const TruckRoutes: React.FC = () => {
  return (
    <Truck.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#5D9CEC' },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
    >
      <Truck.Screen
        name="ListTrucks"
        component={ListTrucks}
        options={{
          title: 'Biblioteca de Caminhões',
        }}
      />
      <Truck.Screen
        name="TruckWeight"
        component={TruckWeight}
        options={{
          title: 'Insira a Carga do Veículo',
        }}
      />
      <Truck.Screen
        name="DestinyAddress"
        component={DestinyAddress}
        options={{
          title: 'Insira o Endereço de Destino',
        }}
      />
      <Truck.Screen
        name="AddTruck"
        component={AddTruck}
        options={{
          title: 'Adicionar Caminhão',
        }}
      />
      <Truck.Screen
        name="TruckSpeed"
        component={TruckSpeed}
        options={{
          title: 'Velocidade Ideal',
        }}
      />
    </Truck.Navigator>
  );
};

export default TruckRoutes;
