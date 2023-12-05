import React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground } from 'react-native';

const Perg1Screen = ({ navigation }) => { 
  return (
    <ImageBackground source={require('../imagens/perg2.jpg')} style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.paragraph}>1. Qual é o movimento artístico que se caracteriza pelo uso de cores vivas e formas geométricas simples?
</Text>

      <Button title="A) Impressionismo" onPress={() => navigation.navigate('perg2')} value="0" color="#000000"/>

      <Button title="B) Expressionismo" onPress={() => navigation.navigate('perg2')} value="0" color="#000000"/>

      <Button title="C) Cubismo" onPress={() => navigation.navigate('perg2')} value="0" color="#000000"/>

      <Button title="D) Fauvismo" onPress={() => navigation.navigate('perg2')} value="1" color="#000000"/>

      <Button title="E) Pop art" onPress={() => navigation.navigate('perg2')} value="0" color="#000000"/>

    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'center',
    width:333,
    height:566,
    padding:24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Perg1Screen;