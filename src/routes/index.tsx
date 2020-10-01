import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight } from 'react-native-gesture-handler';

// Pages
import ListTrucks from '../pages/ListTrucks';
import AddTruck from '../pages/AddTruck';
import TruckSpeed from '../pages/TruckSpeed';

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
          title: 'Meus Caminhões',
          // headerRight: () => (
          //   <IconFontAwesome
          //     name="plus-circle"
          //     onPress={() => console.log('Banana')}
          //     color="#fff"
          //     size={23}
          //     style={{ marginRight: 25 }}
          //   />
          // ),
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
