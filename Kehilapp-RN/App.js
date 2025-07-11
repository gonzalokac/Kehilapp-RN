import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FleteroTabs from './navigation/FleteroTabs';
import FleteroPerfilScreen from './screens/FleteroPerfilScreen';
import ConductorTabs from './navigation/ConductorTabs';
import { ConductorPerfilScreen } from './screens/ConductorScreens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Inicio': iconName = 'home'; break;
            case 'Mapa': iconName = 'location'; break;
            case 'Calendario': iconName = 'calendar'; break;
            case 'Ayuda': iconName = 'help-circle'; break;
            default: iconName = 'home';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={LoginScreen} />
      <Tab.Screen name="Mapa" component={HomeScreen} />
      <Tab.Screen name="Calendario" component={HomeScreen} />
      <Tab.Screen name="Ayuda" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="FleteroTabs" component={FleteroTabs} />
        <Stack.Screen name="FleteroPerfil" component={FleteroPerfilScreen} />
        <Stack.Screen name="ConductorTabs" component={ConductorTabs} />
        <Stack.Screen name="ConductorPerfil" component={ConductorPerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
