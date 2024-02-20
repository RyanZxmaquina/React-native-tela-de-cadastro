import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={[styles.heading, { backgroundColor: 'green' }]}>Bem vindo ao greenside</Text>
        <TextInput placeholder="Nome" style={[styles.input, { marginTop: 100 }]} />
        <TextInput placeholder="Sobrenome" style={[styles.input, { marginTop: 1 }]} />
        <TextInput placeholder="CPF" style={[styles.input, { marginTop: 3 }]} />
        <TextInput placeholder="Senha" secureTextEntry={true} style={[styles.input, { marginTop: 5 }]} />
        <TextInput placeholder="Confirmar Senha" secureTextEntry={true} style={[styles.input, { marginTop: 7 }]} />
        <TouchableOpacity style={styles.button} onPress={() => alert('Botão Continuar pressionado!')}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'green',
    padding: 70,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    fontSize: 34,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#00c21d', // Definindo a cor de fundo do botão
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white', // Definindo a cor do texto do botão
    fontSize: 18,
  },
});
