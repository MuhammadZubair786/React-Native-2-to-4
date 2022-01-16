import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../components/welcome';
import Home from '../components/Home'


const Stack = createNativeStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome}
           options={{headerShown:false}} />
             <Stack.Screen name="Home" component={Home}
           options={{headerShown:false}} />
        </Stack.Navigator>
        
      </NavigationContainer>
    );
  }
  
  export default App;