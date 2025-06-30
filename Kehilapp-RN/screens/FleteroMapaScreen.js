import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export function FleteroMapaScreen() {
  const destinos = [
    { nombre: 'Retiro María', detalle: 'Av. Córdoba 1234 - Donaciones', lat: -34.6037, lng: -58.3816 },
    { nombre: 'Entrega Bet Hilel', detalle: 'Gurruchaga 1087 - Alimentos', lat: -34.5997, lng: -58.4200 },
    { nombre: 'Entrega Escuela', detalle: 'Thames 877 - Últiles', lat: -34.5822, lng: -58.4300 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🗺️ Mapa de Rutas y Destinos</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -34.6037,
          longitude: -58.3816,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {destinos.map((d, i) => (
          <Marker
            key={i}
            coordinate={{ latitude: d.lat, longitude: d.lng }}
            title={d.nombre}
            description={d.detalle}
          />
        ))}
      </MapView>
    </View>
  );
}
