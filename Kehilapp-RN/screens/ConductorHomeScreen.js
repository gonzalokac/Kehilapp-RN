// screens/ConductorHomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function ConductorHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>🚗 Conductor</Text>
      <Text style={styles.subtext}>Bienvenido a tu panel de trabajo</Text>
      <View style={styles.card}>
        <Text style={styles.title}>📢 Últimas novedades</Text>
        <Text>Estás disponible para nuevos viajes.</Text>
        <Text>No hay alertas críticas por el momento.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  subtext: { fontSize: 16, marginBottom: 16 },
  card: { backgroundColor: '#f0f0f0', borderRadius: 10, padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
});



