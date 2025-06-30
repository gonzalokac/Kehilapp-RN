import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export function FleteroRetirosScreen() {
  const pedidosRetiro = [
    { nombre: 'María Perez', direccion: 'Av. Córdoba 1234', detalle: 'Ropa y alimentos' },
    { nombre: 'Daniel Cohen', direccion: 'Pasteur 234', detalle: 'Electrodomésticos' },
    { nombre: 'Ruth Levy', direccion: 'Larrea 567', detalle: 'Juguetes en caja' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📥 Retiro de Donaciones</Text>
      <FlatList
        data={pedidosRetiro}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.nombre}</Text>
            <Text>{item.direccion}</Text>
            <Text style={styles.detalle}>{item.detalle}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No hay pedidos nuevos.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', flex: 1 },
  header: { fontSize: 24, fontWeight: '600', marginBottom: 16 },
  card: { padding: 12, backgroundColor: '#f0f0f0', borderRadius: 8, marginBottom: 10 },
  titulo: { fontWeight: 'bold' },
  detalle: { fontStyle: 'italic' }
});

