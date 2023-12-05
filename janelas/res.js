import React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground } from 'react-native';

const ResScreen = ({ navigation }) => { 
  return (
    <ImageBackground
    source={require('../imagens/sob.jpg')}
    style={styles.container}
    >
    <View style={styles.container}>
      <Text style={styles.paragraph}>Parabéns Zé, concluiu o quiz, gostaria de tentar denovo?</Text>
      

      <Button title="Tentar Novamente" onPress={() => navigation.navigate('perg1')} color="#000000"/>

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
export default ResScreen;