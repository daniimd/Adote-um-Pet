import {View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { withNavigation } from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons';

function MenuList({ navigation }) {

   function visit() {
    navigation.navigate('Cadastro');
  }

  function entrar() {
    navigation.navigate('Feed'); 
  }
  
  return (
        <View style={styles.bottomView}>
            <TouchableOpacity onPress={visit} style={styles.buttonCadastro}>
                <Ionicons name="md-paw" size={25} color={'#a0a8fb'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={visit} style={styles.buttonCadastro}>
                <Ionicons name="md-search" size={25} color={'#a0a8fb'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={visit} style={styles.buttonCadastro}>
                <Ionicons name="md-add" size={25} color={'#a0a8fb'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={visit} style={styles.buttonCadastro}>
                <Ionicons name="md-chatboxes" size={25} color={'#a0a8fb'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={visit} style={styles.buttonCadastro}>
                <Ionicons name="md-person" size={25} color={'#a0a8fb'} />
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row', 
    justifyContent:'center', 
    justifyContent:'space-around',
    borderTopColor: "#cacccb",
    borderTopWidth: 0.5
  },
});

export default withNavigation(MenuList);