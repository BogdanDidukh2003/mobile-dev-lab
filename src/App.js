import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CONSTANTS from './constants';
import { 
  MainScreen, 
  SignInScreen,
  SignUpScreen,
} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={CONSTANTS.SCREENS.SIGN_IN}
      >
      
        <Stack.Screen 
          name={CONSTANTS.SCREENS.MAIN}
          component={MainScreen}
        />

        <Stack.Screen 
          name={CONSTANTS.SCREENS.SIGN_IN}
          component={SignInScreen}
        />

        <Stack.Screen 
          name={CONSTANTS.SCREENS.SIGN_UP}
          component={SignUpScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
