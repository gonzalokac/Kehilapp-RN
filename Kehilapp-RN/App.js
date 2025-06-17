import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Inicio':
                iconName = 'home';
                break;
              case 'Mapa':
                iconName = 'location';
                break;
              case 'Calendario':
                iconName = 'calendar';
                break;
              case 'Ayuda':
                iconName = 'help-circle';
                break;
              default:
                iconName = 'home';
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
    </NavigationContainer>
  );
}
