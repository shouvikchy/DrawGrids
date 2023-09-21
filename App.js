/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Rectangle from './Components/Rectangle';
import Grid from './Components/Grid';
import { gridMaker } from './Helper/Common';

const App = () => {
  const rectangleHeight = 200;
  const rectangleWidth = 300;
  const [gridHeight,setgridHeight] =useState(20);
  const [gridWidth,setgridWidth] =useState(30);
  const [grid,setGrid] = useState();
  
  useEffect(()=>{
    let grids=gridMaker(rectangleHeight,rectangleWidth,gridHeight,gridWidth,gridWidth)
    grids!=null?setGrid(grids):null;
  },[gridHeight,gridWidth])

  return (
    <View style={styles.main}>
      <Rectangle
        height={rectangleHeight}
        width={rectangleWidth}
        color={'cyan'}>
          {/* render all the grids */}
          {grid?grid:null}
        </Rectangle>
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
