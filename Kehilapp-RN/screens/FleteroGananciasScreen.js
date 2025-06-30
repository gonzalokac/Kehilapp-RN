import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export function FleteroGananciasScreen() {
  const pagos = [
    { fecha: '2025-05-01', descripcion: 'Entrega en Escuela Iosef', monto: 2500 },
    { fecha: '2025-05-03', descripcion: 'Retiro en Comunidad Bet El', monto: 1800 },
    { fecha: '2025-05-05', descripcion: 'Entrega en Templo Sinai', monto: 3000 },
  ];
  const total = pagos.reduce((acc, p) => acc + p.monto, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>💰 Ganancias y Pagos</Text>
      <FlatList
        data={pagos}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View style={styles.row}>
            <Text style={[styles.cell, styles.bold]}>Fecha</Text>
            <Text style={[styles.cell, styles.bold]}>Descripción</Text>
            <Text style={[styles.cell, styles.bold]}>Monto</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.fecha}</Text>
            <Text style={styles.cell}>{item.descripcion}</Text>
            <Text style={styles.cell}>${item.monto.toLocaleString()}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${total.toLocaleString()}</Text>
    </View>
  );
}
