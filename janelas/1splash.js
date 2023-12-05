import React from 'react';
import { Text, View, Button, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => { 
  return (
    <ImageBackground
    source={require('../imagens/img.jpg')}
    style={styles.container}
    >
    <View style={styles.container}>
      <Text style={styles.paragraph}>Entrar no Quiz</Text>
      <Button
      title="Entrar"
      onPress={() => navigation.navigate('login')}
      color="#000000"
      />

      <Text style={styles.feito}>Feito por:
      Guilherme R. &
      Lívia Andreata
      </Text>

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
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  feito:{
    fontSize: 30,
  },
});

export default SplashScreen;