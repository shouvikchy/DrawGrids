import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text,SafeAreaView} from 'react-native';
import Rectangle from './Components/Rectangle';
import {gridMaker} from './Helper/Common';
import ModalView from './Components/ModalView';
import Button from './Components/Button';
import {Fonts} from './Helper/fonts/Fonts';

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
      setshowModal(false);
    }
   
   
  };
  const renderModal=()=>{
   return <ModalView
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
  }
  return (
    <SafeAreaView style={styles.main}>
            {/* page title */}
            <Text style={styles.mainText}>Let's Make Grid</Text>

      {/* modal view to get user inputs */}
      {renderModal()}
      {/* parent rectangle */}
      <Rectangle
        height={rectangleHeight}
        width={rectangleWidth}
        color={'#FFFFFF'}>
        {/* render all the grids */}
        {grid ? grid : null}
      </Rectangle>
      <Button
        image={require('./setting.png')}
        title={'Change Grid'}
        action={() => {
          setshowModal(true);
        }}
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  main: {flex:1,backgroundColor:"#fff",padding:20,alignItems:"center"},
  mainText:{fontSize:18,fontFamily:Fonts.bold,color:'#000',marginBottom:30}
});

export default App;
