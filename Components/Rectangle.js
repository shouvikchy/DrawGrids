import React from 'react';
import {View, StyleSheet} from 'react-native';
const Rectangle = props => {
  return (
    <View
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.color,
        flexWrap:'wrap',
        borderWidth:0.5,
        borderColor:'#000'
      }}>
      {/* render the child components inside rectangle */}
      {props.children}
    </View>
  );
};
export default Rectangle;
