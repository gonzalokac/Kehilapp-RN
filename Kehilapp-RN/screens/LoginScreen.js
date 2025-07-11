// screens/LoginScreen.js (actualizado para conductor)
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [view, setView] = useState('inicio');
  const [form, setForm] = useState({});
  const navigation = useNavigation();

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const FormInput = ({ placeholder, secure, field }) => (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secure}
      style={styles.input}
      value={form[field] || ''}
      onChangeText={(text) => handleChange(field, text)}
    />
  );

  const handleRegistro = (tipo) => {
    const usuario = {
      ...form,
      tipo,
    };
    if (tipo === 'fletero') {
      navigation.navigate('FleteroTabs');
    } else if (tipo === 'conductor') {
      navigation.navigate('ConductorTabs');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>KehilApp</Text>
      <Text style={styles.subtitle}>Tu conexión con el mundo judío</Text>

      {view === 'inicio' && (
        <>
          <Text style={styles.sectionTitle}>¿Cómo querés ingresar?</Text>
          <Button title="🔐 Iniciar Sesión" onPress={() => setView('login')} />
          <Button title="📝 Registrarse" onPress={() => setView('tipoRegistro')} />
        </>
      )}

      {view === 'login' && (
        <>
          <Text style={styles.sectionTitle}>🔐 Iniciar Sesión</Text>
          <FormInput placeholder="Email o Teléfono" field="login" />
          <FormInput placeholder="Contraseña" secure field="password" />
          <Button title="Ingresar" onPress={() => navigation.navigate('Home')} />
          <Button title="⬅ Volver" onPress={() => setView('inicio')} />
        </>
      )}

      {view === 'tipoRegistro' && (
        <>
          <Text style={styles.sectionTitle}>¿Qué tipo de usuario sos?</Text>
          <Button title="🙋 Usuario" onPress={() => setView('registroUsuario')} />
          <Button title="🚗 Conductor" onPress={() => setView('registroConductor')} />
          <Button title="🚚 Fletero" onPress={() => setView('registroFletero')} />
          <Button title="🏢 Empresa" onPress={() => setView('registroEmpresa')} />
          <Button title="⬅ Volver" onPress={() => setView('inicio')} />
        </>
      )}

      {view === 'registroConductor' && (
        <>
          <Text style={styles.sectionTitle}>🚗 Registro de Conductor</Text>
          <FormInput placeholder="Nombre completo" field="nombre" />
          <FormInput placeholder="Número de licencia" field="licencia" />
          <FormInput placeholder="Dirección" field="direccion" />
          <FormInput placeholder="Email" field="email" />
          <FormInput placeholder="Teléfono" field="telefono" />
          <FormInput placeholder="Contraseña" secure field="password" />
          <Button title="Registrarse como Conductor" onPress={() => handleRegistro('conductor')} />
          <Button title="⬅ Volver" onPress={() => setView('tipoRegistro')} />
        </>
      )}

      {view === 'registroFletero' && (
        <>
          <Text style={styles.sectionTitle}>🚚 Registro de Fletero</Text>
          <FormInput placeholder="Nombre completo" field="nombre" />
          <FormInput placeholder="Patente del vehículo" field="patente" />
          <FormInput placeholder="Dirección" field="direccion" />
          <FormInput placeholder="Email" field="email" />
          <FormInput placeholder="Teléfono" field="telefono" />
          <FormInput placeholder="Contraseña" secure field="password" />
          <Button title="Registrarse como Fletero" onPress={() => handleRegistro('fletero')} />
          <Button title="⬅ Volver" onPress={() => setView('tipoRegistro')} />
        </>
      )}

      {view === 'registroUsuario' && (
        <>
          <Text style={styles.sectionTitle}>🙋 Registro de Usuario</Text>
          <FormInput placeholder="Nombre" field="nombre" />
          <FormInput placeholder="Apellido" field="apellido" />
          <FormInput placeholder="Dirección" field="direccion" />
          <FormInput placeholder="Email" field="email" />
          <FormInput placeholder="Teléfono" field="telefono" />
          <FormInput placeholder="Contraseña" secure field="password" />
          <Button title="Registrarse" onPress={() => handleRegistro('usuario')} />
          <Button title="⬅ Volver" onPress={() => setView('tipoRegistro')} />
        </>
      )}

      {view === 'registroEmpresa' && (
        <>
          <Text style={styles.sectionTitle}>🏢 Registro de Empresa</Text>
          <FormInput placeholder="Nombre de la empresa" field="nombre" />
          <FormInput placeholder="CUIT" field="cuit" />
          <FormInput placeholder="Dirección fiscal" field="direccion" />
          <FormInput placeholder="Email" field="email" />
          <FormInput placeholder="Teléfono" field="telefono" />
          <FormInput placeholder="Contraseña" secure field="password" />
          <Button title="Registrarse como Empresa" onPress={() => handleRegistro('empresa')} />
          <Button title="⬅ Volver" onPress={() => setView('tipoRegistro')} />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 12,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    borderColor: '#999',
    borderWidth: 1,
    padding: 10,
    marginVertical: 6,
    borderRadius: 6,
  },
});
