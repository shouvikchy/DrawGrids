import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Rectangle from './Components/Rectangle';
import Grid from './Components/Grid';
import {gridMaker} from './Helper/Common';
import ModalView from './Components/ModalView';
import Button from './Components/Button';

const App = () => {
  const rectangleHeight = 200;
  const rectangleWidth = 300;
  const [gridHeight, setgridHeight] = useState(100);
  const [gridWidth, setgridWidth] = useState(100);
  const [grid, setGrid] = useState();
  const [showModal, setshowModal] = useState(false);
  const [gridColor, setgridColor] = useState('cyan');

  useEffect(() => {
    let grids = gridMaker(
      rectangleHeight,
      rectangleWidth,
      Number(gridHeight),
      Number(gridWidth),
      gridColor,
    );
    grids != null ? setGrid(grids) : null;
  }, []);
  const onChangeApply = (height, width, color) => {
    let grids = gridMaker(
      rectangleHeight,
      rectangleWidth,
      Number(height),
      Number(width),
      color,
    );
    if (grids != null) {
      setGrid(grids);
      setgridHeight(height);
      setgridWidth(width);
      setgridColor(color);
    }
    setshowModal(false);
  };
  return (
    <View style={styles.main}>
      {/* modal view to get user inputs */}
      <ModalView
        closeModal={() => {
          setshowModal(false);
        }}
        show={showModal}
        applyAction={(height, width, color) => {
          onChangeApply(height, width, color);
        }}
        initialWidth={gridWidth}
        initialHeight={gridHeight}
        initialColor={gridColor}
      />
      {/* parent rectangle */}
      <Rectangle
        height={rectangleHeight}
        width={rectangleWidth}
        color={'#FFFFFF'}>
        {/* render all the grids */}
        {grid ? grid : null}
      </Rectangle>
      <Button
        style={styles.buttonStyle}
        title={'Change Grid'}
        action={() => {
          setshowModal(true);
        }}
      />
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
  buttonStyle: {
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'cyan',
    marginTop: 20,
  },
});

export default App;
