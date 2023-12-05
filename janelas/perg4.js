import React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground } from 'react-native';

const Perg4Screen = ({ navigation }) => { 
  return (
    <ImageBackground source={require('../imagens/perg3.jpg')} style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.paragraph}>4 Qual é o gênero artístico que representa cenas de fantasia ou mitologia?</Text>

      <Button title="A) Ficção científica" onPress={() => navigation.navigate('perg5')} value="0" color="#000000"/>

      <Button title="B) Fantasia" onPress={() => navigation.navigate('perg5')} value="1" color="#000000"/>

      <Button title="C) Ficção histórica" onPress={() => navigation.navigate('perg5')} value="0" color="#000000"/>

      <Button title="D)  Romance" onPress={() => navigation.navigate('perg5')} value="0" color="#000000"/>

      <Button title="E) Drama" onPress={() => navigation.navigate('perg5')} value="0" color="#000000"/>
      
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
export default Perg4Screen;