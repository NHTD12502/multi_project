import React from 'react';
import { FlatList, Text, View, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";



const Button = ({ backgroundColor }) => {
    return(
        <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                        <View style={ styles.horizontal}></View>
                        <View style={ styles.vertical}></View>
                    </TouchableOpacity> 
    )
}
export default Button;

const styles = StyleSheet.create({
    button: {
        //  flex: 1,
          alignSelf: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: '#9F4D00',
          alignItems: 'center',
        },

    horizontal: {
        position: "absolute",
        top: 18,
        width: '70%',
        height: 4,
        backgroundColor: '#FFFFFF',
      
      },
      
      vertical :{
        position: 'absolute',
        left: 18,
        width: 4,
        height: '70%',
        backgroundColor: '#FFFFFF',
      }})