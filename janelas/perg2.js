import React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground } from 'react-native';

const Perg2Screen = ({ navigation }) => { 
  return (
    <ImageBackground source={require('../imagens/perg2.jpg')} style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.paragraph}>2 Qual é o gênero artístico que retrata cenas da vida cotidiana?</Text>

      <Button title="A) Retrato" onPress={() => navigation.navigate('perg3')} value="0" color="#000000"/>

      <Button title="B) Paisagem" onPress={() => navigation.navigate('perg3')} value="0" color="#000000"/>

      <Button title="C) Natureza-morta" onPress={() => navigation.navigate('perg3')} value="0" color="#000000"/>

      <Button title="D) Escultura" onPress={() => navigation.navigate('perg3')} value="0" color="#000000"/>

      <Button title="E) Realismo" onPress={() => navigation.navigate('perg3')} value="1" color="#000000"/>
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
export default Perg2Screen;