import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';
import { firebase } from './../functions';

export const Routes = () => {
  const [userIsSignedIn, setUserIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      setUserIsSignedIn(user ? true : false);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      {userIsSignedIn ? (
        <AppStack />
      ) : (
          <AuthStack />
        )}
    </NavigationContainer>
  );
};
