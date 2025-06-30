// screens/CalendarioScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function CalendarioScreen() {
  const eventosFijos = [
    { fecha: '2025-03-14', descripcion: 'Purim' },
    { fecha: '2025-04-13', descripcion: 'Pesaj - Día 1' },
    { fecha: '2025-06-02', descripcion: 'Shavuot - Día 1' },
    { fecha: '2025-09-23', descripcion: 'Rosh Hashaná - Día 1' },
    { fecha: '2025-10-02', descripcion: 'Iom Kipur' }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Calendario Hebreo</Text>
      <FlatList
        data={eventosFijos}
        keyExtractor={(item) => item.fecha}
        renderItem={({ item }) => (
          <View style={styles.evento}>
            <Text>{item.fecha}</Text>
            <Text style={{ fontWeight: 'bold' }}>{item.descripcion}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', flex: 1 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 10 },
  evento: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
});
