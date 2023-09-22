import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {Fonts} from '../Helper/fonts/Fonts';
const Dropdown = ({data, title, onSelect, initialColor}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{title}</Text>
      <SelectDropdown
        data={data}
        defaultValue={initialColor} //shows the selected color initially
        onSelect={(selectedItem, index) => {
          onSelect(selectedItem);
        }}
        defaultButtonText={'Select Color'}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={isOpened => {
          return <Image style={{tintColor:'#000'}} source={require('../down.png')} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {height: 50, width: '100%', flexDirection: 'row', alignItems: 'center',},
  text: {fontSize: 14, marginRight: 5,color:'#000',fontFamily:Fonts.medium},
  dropdown1BtnStyle: {
    height: 40,
    width: '50%',
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#444',
  
  },
  dropdown1BtnTxtStyle: {color: '#000', textAlign: 'left',fontFamily:Fonts.medium},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left',fontFamily:Fonts.medium},
});
export default Dropdown;
