import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
const Button = ({style, title, action}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        action();
      }}
      style={style}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
