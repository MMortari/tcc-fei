import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import ListTrucks from '../pages/ListTrucks';

const Truck = createStackNavigator();

const TruckRoutes: React.FC = () => (
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
      options={{ title: 'Meus Caminhões' }}
    />
  </Truck.Navigator>
);

export default TruckRoutes;
