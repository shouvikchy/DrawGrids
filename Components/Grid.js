import React from "react";
import { View,StyleSheet } from "react-native";
const Grid=({height,width,color})=>{
    return(
        <View style={[{height:height,width:width,backgroundColor:color},styles.main]}>

        </View>
    )

}
const styles = StyleSheet.create({
    main:{borderWidth:1,borderColor:'#000'}
})

export default Grid;