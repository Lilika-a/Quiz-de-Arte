import React from 'react';
import { Text, View, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => { 
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ImageBackground
    source={require('../imagens/log.jpg')}
    style={styles.imagem}
    >
    <View style={styles.container}>

      <Text style={styles.paragraph}>Usuário</Text>
      <TextInput style={styles.texto}
      placeholder="Digite o usuario"
      value={username}
      onChangeText={(text) => setUsername(text)}
      />
      
      <Text style={styles.paragraph}>Senha</Text>
      <TextInput style={styles.texto}
      placeholder="Digite a senha"
      value={password}
      onChangeText={(text) => setPassword(text)}
      />
      <Button title="Entrar" onPress={() => navigation.navigate('sobre')} color="#000000" />
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'center',
    width:314,
    padding:24,
  },
  imagem:{
    alignItems: 'center',
    justifyContent:'center',
    width:333,
    height:566,
    padding:24,
  },
  paragraph: {
    fontSize: 30,
    color:'#000000',
    margin: 25,
    fontWeight: 500,
    textAlign: 'center',
  },
  texto:{
    fontSize: 14,
    textAlign: 'left',
    color: '#0a3a3b',
    padding: 10,
    margin: 24,
    width: 250,
    height: 30,
    borderRadius: 7,
    backgroundColor: '#acc2e8',
  }
});
export default LoginScreen;