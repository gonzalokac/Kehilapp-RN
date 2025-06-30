import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export function FleteroEntregasScreen() {
  const entregasPendientes = [
    { destino: 'Escuela Iosef Caro', direccion: 'Thames 877', contenido: 'Últiles escolares' },
    { destino: 'Templo Bet Hilel', direccion: 'Gurruchaga 1087', contenido: 'Alimentos no perecederos' },
    { destino: 'Comedor Tikvá', direccion: 'Scalabrini Ortiz 2345', contenido: 'Ropa clasificada' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📤 Entregas Pendientes</Text>
      <FlatList
        data={entregasPendientes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.destino}</Text>
            <Text>{item.direccion}</Text>
            <Text style={styles.detalle}>{item.contenido}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No hay entregas activas.</Text>}
      />
    </View>
  );
}
