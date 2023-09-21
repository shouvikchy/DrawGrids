import React from 'react';
import {View, StyleSheet} from 'react-native';
const Rectangle = props => {
  return (
    <View
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.color,
      }}>
      {/* render the child components inside rectangle */}
      {props.children}
    </View>
  );
};
export default Rectangle;
