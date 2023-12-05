import React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground } from 'react-native';

const SobreScreen = ({ navigation }) => { 
  return (
    <ImageBackground
    source={require('../imagens/sob.jpg')}
    style={styles.container}
    >
    <View style={styles.container}>
      <Text style={styles.paragraph}>Este é um projeto em parceria, que conta com: Guilherme Reis e Lívia Andreata, onde fizemos um pequeno quiz com cinco perguntas sobre arte em geral.
       Boa Sorte!</Text>

      <Button title="Próximo" onPress={() => navigation.navigate('perg1')} color="#000000"/>

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
export default SobreScreen;