import {  ScrollView, View, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

import MenuList from '../components/MenuList';

export default function Feed({ navigation }) {

   function visit() {
    navigation.navigate('Cadastro');
  }

  function entrar() {
    navigation.navigate('Feed'); 
  }
  
  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <ScrollView>
        <View style={styles.form}>  
          <View style={styles.background}>

            <Text style={styles.label}>SEU E-MAIL *</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="black"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Text style={styles.label}>SENHA *</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="black"
              returnKeyType='go'
              secureTextEntry
              autoCapitalize="none"
            />

            <View style={styles.buttons}>
              <TouchableOpacity onPress={entrar} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>           
            </View>     

            <TouchableOpacity onPress={visit} style={styles.buttonCadastro}>
              <Text style={styles.buttonTextCadastro}>CADASTRAR</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>

      <MenuList/>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
  },

  background: {
    backgroundColor: 'rgba(240,255,255, 0.9)',
    borderRadius: 10,
    padding: 10,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 0.5,
  },

  button: {
    height: 35,
    marginTop:12,
    backgroundColor: 'rgba(237, 211, 214, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderBottomColor: 'black',
    borderWidth: 0.5,
  },

  buttonText: {
    color: 'black',
    fontSize: 16,
  },

  buttonTextCadastro: {
    color: '#fba0c8',
    fontSize: 13,
    textAlign: 'right',
    marginTop: 30,
    fontWeight: 'bold',
    textShadowColor: '#fff',
    textShadowOffset: {width: -2, height: -2},
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3
  },
});