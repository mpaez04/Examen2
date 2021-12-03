import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1';
import PeliculasProvider from './Navigations/PeliculasContext';


export default function App() {
  return (
    <PeliculasProvider>
      <NavigationContainer>
        <StackNavigation1/>
      </NavigationContainer>
    </PeliculasProvider>
  );
};
