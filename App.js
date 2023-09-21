/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Rectangle from './Components/Rectangle';

const App = () => {
  const rectangleHeight = 200;
  const rectangleWidth = 300;

  return (
    <View style={styles.main}>
      <Rectangle
        height={rectangleHeight}
        width={rectangleWidth}
        color={'cyan'}></Rectangle>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default App;
