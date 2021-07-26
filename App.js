import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Content from './src/componentes/Content';

import Header from './src/componentes/Header';

export default function App() {
  return (
    <View >
      <Header/>
      <Content/>
      

    </View>
  );
}


