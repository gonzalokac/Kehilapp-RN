import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export function ConductorPerfilScreen({ navigation }) {
  const [usuario, setUsuario] = useState({
    nombre: 'Ana', apellido: 'Gómez', email: 'ana@correo.com',
    telefono: '1122334455', direccion: 'Av. Córdoba 1111', licencia: 'X12345', foto: null
  });

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7, allowsEditing: true, base64: true
    });
    if (!result.canceled) {
      setUsuario({ ...usuario, foto: result.assets[0].uri });
      Alert.alert('Foto actualizada');
    }
  };

  const cerrarSesion = () => {
    Alert.alert('Sesión cerrada');
    navigation.navigate('Inicio');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Perfil del Conductor</Text>
      <Image
        source={{ uri: usuario.foto || 'https://via.placeholder.com/120x120.png?text=Perfil' }}
        style={styles.avatar}
      />
      <Button title="Cambiar Foto" onPress={pickImage} />
      <Text style={styles.info}>📛 {usuario.nombre} {usuario.apellido}</Text>
      <Text style={styles.info}>🪪 Licencia: {usuario.licencia}</Text>
      <Text style={styles.info}>📧 {usuario.email}</Text>
      <Text style={styles.info}>📞 {usuario.telefono}</Text>
      <Text style={styles.info}>🏠 {usuario.direccion}</Text>
      <Button title="Cerrar Sesión" onPress={cerrarSesion} color="crimson" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, alignItems: 'center', backgroundColor: '#fff', flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 12 },
  info: { marginVertical: 4, fontSize: 16 },
});
