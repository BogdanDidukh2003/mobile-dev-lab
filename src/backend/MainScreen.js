import { useState } from 'react';
import { firebase } from './../functions';

export const useMainScreenBackend = () => {
  const [name, setName] = useState('');

  firebase.getUserData((userDoc) => {
    setName(userDoc.data().name);
  });

  const handleSignOut = () => {
    firebase.signOut();
  };

  return {
    name,
    handleSignOut,
  };
};
