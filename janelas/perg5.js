import React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground } from 'react-native';

const Perg5Screen = ({ navigation }) => { 
  return (
    <ImageBackground source={require('../imagens/perg3.jpg')} style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.paragraph}>5 Qual é o movimento artístico que se caracteriza pela exploração de novas técnicas e materiais?</Text>

      <Button title="A) Expressionismo abstrato" onPress={() => navigation.navigate('res')} value="0" color="#000000"/>

      <Button title="B) Pop art" onPress={() => navigation.navigate('res')} value="0" color="#000000"/>

      <Button title="C) Arte conceitual" onPress={() => navigation.navigate('res')} value="1" color="#000000"/>

      <Button title="D) Minimalismo" onPress={() => navigation.navigate('res')} value="0" color="#000000"/>

      <Button title="E) Fluxus" onPress={() => navigation.navigate('res')} value="0" color="#000000"/>
      
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
export default Perg5Screen;