import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function LoginScreen() {
  const [view, setView] = useState('inicio');

  const FormInput = ({ placeholder, secure }) => (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secure}
      style={styles.input}
    />
  );

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
          <FormInput placeholder="Email o Teléfono" />
          <FormInput placeholder="Contraseña" secure />
          <Button title="Ingresar" onPress={() => {}} />
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

      {view === 'registroUsuario' && (
        <>
          <Text style={styles.sectionTitle}>📝 Crear Cuenta</Text>
          <FormInput placeholder="Nombre" />
          <FormInput placeholder="Apellido" />
          <FormInput placeholder="Dirección" />
          <FormInput placeholder="Email" />
          <FormInput placeholder="Teléfono" />
          <FormInput placeholder="Contraseña" secure />
          <Button title="Registrarse" onPress={() => {}} />
          <Button title="⬅ Volver" onPress={() => setView('inicio')} />
        </>
      )}

      {view === 'registroConductor' && (
        <>
          <Text style={styles.sectionTitle}>🚗 Registro de Conductor</Text>
          <FormInput placeholder="Nombre completo" />
          <FormInput placeholder="Número de licencia" />
          <FormInput placeholder="Dirección" />
          <FormInput placeholder="Email" />
          <FormInput placeholder="Teléfono" />
          <FormInput placeholder="Contraseña" secure />
          <Button title="Registrarse como Conductor" onPress={() => {}} />
          <Button title="⬅ Volver" onPress={() => setView('inicio')} />
        </>
      )}

      {view === 'registroFletero' && (
        <>
          <Text style={styles.sectionTitle}>🚚 Registro de Fletero</Text>
          <FormInput placeholder="Nombre completo" />
          <FormInput placeholder="Patente del vehículo" />
          <FormInput placeholder="Dirección" />
          <FormInput placeholder="Email" />
          <FormInput placeholder="Teléfono" />
          <FormInput placeholder="Contraseña" secure />
          <Button title="Registrarse como Fletero" onPress={() => {}} />
          <Button title="⬅ Volver" onPress={() => setView('inicio')} />
        </>
      )}

      {view === 'registroEmpresa' && (
        <>
          <Text style={styles.sectionTitle}>🏢 Registro de Empresa</Text>
          <FormInput placeholder="Nombre de la empresa" />
          <FormInput placeholder="CUIT" />
          <FormInput placeholder="Dirección fiscal" />
          <FormInput placeholder="Email" />
          <FormInput placeholder="Teléfono" />
          <FormInput placeholder="Contraseña" secure />
          <Button title="Registrarse como Empresa" onPress={() => {}} />
          <Button title="⬅ Volver" onPress={() => setView('inicio')} />
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
