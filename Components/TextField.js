import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Fonts} from '../Helper/fonts/Fonts';
const TextField = ({title, placeholder, onChange, value}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        keyboardType={'numeric'}
        placeholder={placeholder}
        style={styles.input}
        defaultValue={value.toString()}
        onChangeText={t => {
          onChange(t);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {height: 50, width: '100%', flexDirection: 'row', alignItems: 'center'},
  title: {fontSize: 14, paddingRight: 5,color:'#000',fontFamily:Fonts.medium},
  input: {
    flex: 1,
    padding: 5,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#000',
    fontSize: 16,
    fontFamily:Fonts.medium
  },
});
export default TextField;
