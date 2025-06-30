import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function AyudaScreen() {
  const [modo, setModo] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🤝 Centro de Ayuda</Text>
      <Text style={styles.subtitle}>¿Necesitás asistencia? Estamos para ayudarte</Text>

      <Text style={styles.section}>📞 Contacto</Text>
      <Text>Tel: +54 11 1234-5678</Text>
      <Text>Email: ayuda@kehilapp.com</Text>

      <Text style={styles.section}>🚚 Servicio de Flete para Donaciones</Text>
      <Button title="👐 Quiero hacer un donativo" onPress={() => setModo('donar')} />
      <Button title="🙏 Necesito una donación" onPress={() => setModo('recibir')} />

      {modo === 'donar' && (
        <>
          <TextInput style={styles.input} placeholder="¿Qué querés donar?" />
          <TextInput style={styles.input} placeholder="Dirección para retirar" />
          <Button title="Enviar solicitud de donación" onPress={() => {}} />
        </>
      )}

      {modo === 'recibir' && (
        <>
          <TextInput style={styles.input} placeholder="¿Qué necesitás?" />
          <TextInput style={styles.input} placeholder="¿Dónde estás ubicado?" />
          <Button title="Enviar solicitud de ayuda" onPress={() => {}} />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold' },
  subtitle: { marginBottom: 20 },
  section: { marginTop: 20, fontSize: 18, fontWeight: '600' },
  input: {
    borderColor: '#999',
    borderWidth: 1,
    padding: 10,
    marginVertical: 6,
    borderRadius: 6,
  },
});
