// navigation/ConductorTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  ConductorHomeScreen,
  ConductorViajesScreen,
  ConductorMapaScreen,
  ConductorGananciasScreen,
} from '../screens/ConductorScreens';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function ConductorTabs() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerRight: () => (
          <Ionicons
            name="person-circle-outline"
            size={30}
            color="black"
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate('ConductorPerfil')}
          />
        ),
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Inicio': iconName = 'home'; break;
            case 'Viajes': iconName = 'car'; break;
            case 'Mapa': iconName = 'map'; break;
            case 'Ganancias': iconName = 'cash'; break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={ConductorHomeScreen} />
      <Tab.Screen name="Viajes" component={ConductorViajesScreen} />
      <Tab.Screen name="Mapa" component={ConductorMapaScreen} />
      <Tab.Screen name="Ganancias" component={ConductorGananciasScreen} />
    </Tab.Navigator>
  );
}
