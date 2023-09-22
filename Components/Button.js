import React from 'react';
import {TouchableOpacity, Text,Image,StyleSheet} from 'react-native';
import {Fonts} from '../Helper/fonts/Fonts';
const Button = ({style,title, action,image}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        action();
      }}
      style={style?style:styles.buttonStyle}>
        {image?<Image style={styles.image} source={image}/>:null}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles=StyleSheet.create({
  buttonStyle: {
    height:35,
    width:130,
    justifyContent:"center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: 'orange',
    marginTop: 20,
    flexDirection:'row',
    elevation:9,
    alignSelf:'center'
  },
  image:{height:20,width:20,tintColor:'#000',marginRight:5},
  text:{fontSize:14,fontFamily:Fonts.semibold,color:'#000'}
});
export default Button;
