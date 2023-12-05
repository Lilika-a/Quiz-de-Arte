import React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground } from 'react-native';

const Perg3Screen = ({ navigation }) => { 
  return (
    <ImageBackground source={require('../imagens/perg2.jpg')} style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.paragraph}>3 Qual é o movimento artístico que se caracteriza pela valorização da arte popular e da cultura nativa?</Text>

      <Button title="A) Barroco" onPress={() => navigation.navigate('perg4')} value="0" color="#000000"/>

      <Button title="B) Romantismo" onPress={() => navigation.navigate('perg4')} value="0" color="#000000"/>

      <Button title="C) Modernismo" onPress={() => navigation.navigate('perg4')} value="0" color="#000000"/>

      <Button title="D) Pós-modernismo" onPress={() => navigation.navigate('perg4')} value="0" color="#000000"/>

      <Button title="E) Arte Naïf" onPress={() => navigation.navigate('perg4')} value="1" color="#000000"/>
      
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
export default Perg3Screen;