import * as React from "react";
import LinearGradient from 'react-native-linear-gradient';
import { Image, StyleSheet, Text, Pressable, View,TouchableOpacity, Button } from "react-native";

import { Border, FontFamily } from "../utilities/GlobalStyles";
import { List, ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


// const renderRectangleBox = () => {
//     return (
//       <View style={{
//         width: 200,
//         height: 200,
//         borderRadius: 10,
//         backgroundColor: "red",
//       }}>
//         {text.map((text, index) => (
//           <Text key={index} style={{
//             textAlign: "center",
//             fontSize: 20,
//             margin: 10,
//           }}>{text}</Text>
//         ))}
//       </View>
//     );
//   };


const DetailScreen =(props) => {

    const navigation = useNavigation();
    const onPressHandler = () => {
        navigation.navigate('SearchList')
    }


    return(
    <LinearGradient
          style={styles.main}
          locations={[0, 1, 1, 1]}
          colors={["#eaa9a9", "#000", "#514e4e", "rgba(0, 0, 0, 0)"]}
        >
            <View style ={{flex:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30,fontWeight:'bold',color:'white',textShadowRadius:10}}>District 10</Text>
            </View>
            <View style ={{flex:20,justifyContent:'center',alignItems:'center'}}>

                {/* <View style={{flex:1,flexDirection:'row' , width :"80%", backgroundColor: "#F9B87E" , justifyContent: 'space-evenly'}}>
                    {/* <View style={{flex:1  }}></View>


                    <View style={{flex:1  }}></View> *

                    <Text style ={{textAlignVertical:"bottom", marginBottom:10, fontSize: 16, fontWeight: "regular"}} > Temparature </Text>
                    <View style={styles.verticleLine}></View>
                    <Text style ={{textAlignVertical:"bottom", marginBottom:10, fontSize: 16, fontWeight: "regular"}} > Humidity </Text>

                </View> */}
               
                    <View style={styles.container}>
                        <View style={[styles.box, styles.box1]}>
                            <Text style ={styles.text_value}>
                                27 C
                            </Text>

                            <Text style ={styles.text_category}>
                                Temparature
                            </Text>
                        </View>

                        <View style={styles.line}></View>
                        <View style={[styles.box,styles.box2]}>
                            <Text style ={styles.text_value}>
                                25%
                            </Text>

                            <Text style ={styles.text_category}>
                                Humidity
                            </Text>
                        
                        </View>
                    </View>
                    <View style={styles.horiz_line}></View>
                    <View style={styles.container}>
                        <View style={[styles.box, styles.box3]}>
                            <Text style ={styles.text_value}>
                                Rainning
                            </Text>

                            <Text style ={styles.text_category}>
                                Weather
                            </Text>
                        </View>
                        <View style={styles.line}>
                            
                        </View>
                        <View style={[styles.box,styles.box4]}>
                            <Text style ={styles.text_value}>
                                Working
                            </Text>

                            <Text style ={styles.text_category}>
                                State
                            </Text>
                        </View>
                    </View>
        
            
                </View>
            <View style ={{flex:18,alignItems:'center'}}>

                <Text style={{fontSize:30,fontWeight:'bold',color:'white',justifyContent:'flex-start',textShadowRadius:10,}}>Flood Warning
                </Text>
                <View style={{flexDirection:'row'  }}>
                    <View style = {styles.rectangle} />    
                    <View style = {styles.rectangle} />  
                    <View style = {styles.rectangle} />  
                </View>

            </View>
            <View style ={{flex:25,justifyContent:'center',alignItems:'center'}}>
                <View style = {styles.imageBox} >
                    <Text style={{fontSize:30,fontWeight:'bold',color:'white',textAlign: 'center',textShadowRadius:10,}}>No Flood
                    </Text>
                    <View style={{justifyContent:'center',alignItems:'center'  }}>
                        <Image
                            style={styles.image}
                            source={require('../assets/image/dailonguyenvanlinh.jpg')}
                        />
                    </View>
  
                </View>
            </View>
            <View style ={{flex:15}}>
            <       Text style={{fontSize:21,fontWeight:'regular',color:'#FDA43C',textAlign: 'left',paddingHorizontal: 20}} >Device in use
                    </Text>

                    <LinearGradient
            style={styles.gradient}
            colors={['#FFFFFF', '#FF0000']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            />
                    <TouchableOpacity style={styles.button} onPress={onPressHandler}>
                        <Text style={styles.buttonText}></Text>
                    </TouchableOpacity>
                        
            </View>

    </LinearGradient>


            )
}
export default DetailScreen;



const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
      },
      text_category: {
        fontSize: 16,
        fontStyle: "Regular",
        fontFamily: "Roboto",
        marginTop: 5

      },
      text_value:{
        fontSize: 25,
        fontWeight: 'bold',
        
        fontFamily: "Roboto",
        marginTop: 15
      },
      box: {
        height: '100%',
        width: '40%',
        backgroundColor: '#F9B87E',
        alignItems: "center",
        justifyContent: "center"
      },
      box1: {
        borderTopLeftRadius: 15
      },
      box2: {
        borderTopRightRadius: 15
      },
      box3: {
        borderBottomLeftRadius: 15
      },
      box4: {
        borderBottomRightRadius: 15
      },
      line: {
        height: '100%',
        width: 1,
        backgroundColor: '#EA9939',
      },
      horiz_line:{
        width: "80%",
        height : 1,
        backgroundColor: '#EA9939'
      },
    verticleLine: {
        height: '100%',
    width: 1,
    backgroundColor: '#909090',
    },
    detailScreenFirstPageChild: {
        top: 568,
        left: 37,
        borderRadius: 67,
        width: 333,
        height: 80,
        position: "absolute",
      },
        rectangle: {
            width: 110,
            height: 83,
            backgroundColor: '#84807C',
            borderColor: '#6F6D6A',
            borderWidth: 2


    },
    imageBox: {
        height: '100%',
        width: '80%',
        backgroundColor: '#F9B87E',
        borderRadius: 10
    },
    image: {
        height: 170,
        width: '90%',
       
    },
    openRectangle: {
        height: 83,
        width: '100%',
        paddingHorizontal: 80
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: '#9F4D00',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      }

}
)
