import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login'
import SplashScreen from 'react-native-splash-screen';
import Slide1 from './src/Slide1';
import Onboarding from './src/screens/Onboarding';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  componentDidMount(){
    SplashScreen.hide();
  }

  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Slide1" component={Slide1} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

export default App;