import React from 'react';
import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Modal from 'react-native-modal';
import TextField from './TextField';
import Dropdown from './Dropdown';
import {Colors} from '../Helper/Colors';
import Button from './Button';
import {Fonts} from '../Helper/fonts/Fonts';
const ModalView = ({
  closeModal,
  show,
  initialWidth,
  initialHeight,
  initialColor,
  applyAction,
}) => {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [color, setColor] = useState(null);
  useEffect(()=>{

      setColor(null);
      setHeight(null);
      setWidth(null);

  },[show])

  return (
    <Modal
      isVisible={show}
      swipeDirection="down"
      onSwipeComplete={e => {
        closeModal();
      }}
      customBackdrop={
        <TouchableWithoutFeedback
          onPress={() => {
            closeModal();
          }}>
          <View style={{flex: 1, backgroundColor: '#616264'}} />
        </TouchableWithoutFeedback>
      }
      style={{justifyContent: 'flex-end',marginBottom:0}}>
        <View style={styles.main}>
          <View style={styles.dropModalStyle}>

          </View>
        <Text style={styles.basicText}><Text style={{color:"red"}}>*</Text>The parent rectangle is 200 X 300 px</Text>
        <Text style={styles.basicText}>⦿ Grid height should be the value that 200 is entirely divisable by it.{'\n'}⦿ Grid width should be the value that 300 is completely divisable by it.</Text>

        <TextField
          title={'Grid Height: '}
          value={initialHeight ? initialHeight : 0}
          placeholder={'Enter Grid Height'}
          onChange={h => {
            setHeight(h);
          }}
        />
        <TextField
          title={'Grid Width:  '}
          value={initialWidth ? initialWidth : 0}
          placeholder={'Enter Grid Width'}
          onSubmitEditing={()=>alert("hi")}
          onChange={w => {
            setWidth(w);
          }}
        />
        <Dropdown
          onSelect={c => {
            setColor(c);
          }}
          title={'Select Color:'}
          data={Colors}
          initialColor={initialColor}
        />
        <Button
          title={'Apply'}
          image={require('../tick.png')}
          action={() => {
            applyAction(height!=null?height:initialHeight, width!=null?width:initialWidth, color!=null?color:initialColor);
          }}
        />

        </View>
     
    </Modal>
  );
};

export default ModalView;
const styles = StyleSheet.create({
  main: {
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -15,
    padding: 20,

  },
  dropModalStyle:{height:5,width:70,backgroundColor:"#000",borderRadius:5,alignSelf:"center",marginBottom:20},
  basicText:{fontSize:14,marginBottom:20,fontFamily:Fonts.medium,color:"#808080"},

});
