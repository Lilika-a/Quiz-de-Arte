import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './janelas/1splash';
import LoginScreen from './janelas/2login';
import SobreScreen from './janelas/3sobre';
import Perg1Screen from './janelas/perg1';
import Perg2Screen from './janelas/perg2';
import Perg3Screen from './janelas/perg3';
import Perg4Screen from './janelas/perg4';
import Perg5Screen from './janelas/perg5';
import ResScreen from './janelas/res';

const Telas = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Telas.Navigator initialRouteName="splash">

        <Telas.Screen name="splash" component={SplashScreen} />
        <Telas.Screen name="login" component={LoginScreen} />
        <Telas.Screen name="sobre" component={SobreScreen} />
        <Telas.Screen name="perg1" component={Perg1Screen}/>
        <Telas.Screen name="perg2" component={Perg2Screen}/>
        <Telas.Screen name="perg3" component={Perg3Screen}/>
        <Telas.Screen name="perg4" component={Perg4Screen}/>
        <Telas.Screen name="perg5" component={Perg5Screen}/>
        <Telas.Screen name="res" component={ResScreen}/>

      </Telas.Navigator>
    </NavigationContainer>
  );
}
export default App;
