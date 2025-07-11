import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export function ConductorMapaScreen() {
  const zonas = [
    { nombre: 'Templo de Once', lat: -34.6092, lng: -58.4061 },
    { nombre: 'Templo de Palermo', lat: -34.5782, lng: -58.4306 },
    { nombre: 'Zona Caliente: Recoleta', lat: -34.5895, lng: -58.3932 },
    { nombre: 'Zona Caliente: Villa Crespo', lat: -34.5963, lng: -58.4367 }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🗺️ Mapa de Rutas</Text>
      <Text style={styles.subtext}>Zonas con más pedidos ahora: Once, Recoleta y Palermo.</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -34.6037,
          longitude: -58.3816,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {zonas.map((zona, i) => (
          <Marker
            key={i}
            coordinate={{ latitude: zona.lat, longitude: zona.lng }}
            title={zona.nombre}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 4 },
  subtext: { marginBottom: 8 },
  map: { flex: 1, borderRadius: 16, borderColor: '#0077cc', borderWidth: 2 },
});