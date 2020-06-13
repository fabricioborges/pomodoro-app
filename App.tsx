import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Main from './src/pages/Main';

export default function App() {
  return (
    <View style={styles.view}>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  }
})