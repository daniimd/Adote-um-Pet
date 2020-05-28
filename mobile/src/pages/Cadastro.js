import React, { useState, useEffect } from 'react';
import {  ImageBackground, View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import RadioButton from 'react-native-radio-button'

import logo from '../assets/paw-dog.jpg';

export default function Cadastro({ navigation }) {

  const [selectedOng, setSelectedOng] = useState(false);
  const [selectedUser, setSelectedUser] = useState(false);

  async function back() {
    navigation.navigate('Index');
  }

  function handleSelectedOption(option) {
    if (option === 'ong') {
      setSelectedOng(true);
      setSelectedUser(false);
    }
    if (option === 'usuario') {
      setSelectedOng(false);
      setSelectedUser(true);  
    } 
  }

  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <ImageBackground source={logo} style={styles.image}>

      <View style={styles.form}>
        <View style={styles.background}>

        <Text style={styles.label}>TIPO *</Text>
        <View style={{flexDirection: 'row', justifyContent:'center',  justifyContent:'space-around'}}>
          <View style={{flexDirection: 'row', justifyContent:'center'}}>
            <Text style={styles.labelButton}>ONG</Text>
            <RadioButton
              animation={'bounceIn'}
              isSelected={selectedOng}
              onPress={() => handleSelectedOption('ong')}
              value={'ong'}
              outerColor={'#fba0c8'}
              innerColor={'#fba0c8'}
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent:'center'}}>
            <Text style={styles.labelButton}>USUÁRIO</Text>
            <RadioButton
              animation={'bounceIn'}
              onPress={() => handleSelectedOption('usuario')}
              isSelected={selectedUser}
              value={'usuario'}
              outerColor={'#fba0c8'}
              innerColor={'#fba0c8'}
              />
            </View>
        </View>

          <Text style={styles.label}>NOME *</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>SEU E-MAIL *</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="black"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>CPF *</Text>
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>        
          </View>   

          <TouchableOpacity onPress={back} style={styles.buttonCadastro}>
            <Text style={styles.buttonTextCadastro}>VOLTAR</Text>
          </TouchableOpacity>

          </View>
        </View>

      </ImageBackground>
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

  labelButton: {
    fontWeight: 'bold',
    color: '#444',
    padding: 10,
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