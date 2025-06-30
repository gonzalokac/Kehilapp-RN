import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FleteroRetirosScreen, FleteroEntregasScreen, FleteroMapaScreen, FleteroGananciasScreen } from '../screens/FleteroScreens';
import FleteroChatScreen from '../screens/FleteroChatScreen';

const Tab = createBottomTabNavigator();

export default function FleteroTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerRight: () => (
          <Ionicons
            name="person-circle-outline"
            size={30}
            color="black"
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate('FleteroPerfil')}
          />
        ),
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Retiros': iconName = 'download'; break;
            case 'Entregas': iconName = 'upload'; break;
            case 'Mapa': iconName = 'map'; break;
            case 'Pagos': iconName = 'cash'; break;
            case 'Chat': iconName = 'chatbox'; break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Retiros" component={FleteroRetirosScreen} />
      <Tab.Screen name="Entregas" component={FleteroEntregasScreen} />
      <Tab.Screen name="Mapa" component={FleteroMapaScreen} />
      <Tab.Screen name="Pagos" component={FleteroGananciasScreen} />
      <Tab.Screen name="Chat" component={FleteroChatScreen} />
    </Tab.Navigator>
  );
}