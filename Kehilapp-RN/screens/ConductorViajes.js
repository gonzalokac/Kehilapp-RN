// screens/ConductorViajesScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ConductorViajesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🚘 Viajes</Text>

      <View style={styles.card}>
        <Text style={styles.title}>📅 Pedidos Disponibles</Text>
        <Text>• Viaje a Palermo - 14:00hs</Text>
        <Text>• Viaje a Belgrano - 15:30hs</Text>
        <Text>• Viaje a Recoleta - 16:00hs</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>🚗 Viajes en Curso</Text>
        <Text>• Palermo - 13:00hs (Conductor: Juan Pérez)</Text>
        <Text>• Caballito - 13:30hs (Conductor: Ana López)</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>📜 Historial de Viajes</Text>
        <Text>• Recoleta - 12:00hs (Luis Gómez) - $250</Text>
        <Text>• Belgrano - 10:30hs (Paula Díaz) - $200</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  card: { backgroundColor: '#f0f0f0', borderRadius: 10, padding: 16, marginBottom: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
});