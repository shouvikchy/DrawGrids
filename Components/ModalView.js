import React from 'react';
import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Modal from 'react-native-modal';
import TextField from './TextField';
import Dropdown from './Dropdown';
import {Colors} from '../Helper/Colors';
import Button from './Button';

const ModalView = ({
  closeModal,
  show,
  initialWidth,
  initialHeight,
  initialColor,
  applyAction,
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState('');

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
      style={{justifyContent: 'flex-end', margin: 0}}>
      <View style={styles.main}>
        <Text>hello</Text>
        <TextField
          title={'Grid Height:'}
          value={initialHeight ? initialHeight : 0}
          placeholder={'Enter Grid Height'}
          onChange={h => {
            setHeight(h);
          }}
        />
        <TextField
          title={'Grid Width:'}
          value={initialWidth ? initialWidth : 0}
          placeholder={'Enter Grid Width'}
          onChange={w => {
            setWidth(w);
          }}
        />
        <Dropdown
          onSelect={c => {
            setColor(c);
          }}
          title={'Select Color'}
          data={Colors}
          initialColor={initialColor}
        />
        <Button
          style={styles.buttonStyle}
          title={'Apply'}
          action={() => {
            applyAction(height, width, color);
          }}
        />
      </View>
    </Modal>
  );
};

export default ModalView;
const styles = StyleSheet.create({
  common: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    width: '95%',
    alignSelf: 'center',
  },
  main: {
    width: '95%',
    maxHeight: '90%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -15,
    padding: 20,
    alignSelf: 'center',
  },
  buttonStyle: {
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'cyan',
    marginTop: 20,
    alignSelf: 'center',
  },
});
