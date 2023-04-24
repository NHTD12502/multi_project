import * as React from "react";
import LinearGradient from 'react-native-linear-gradient';
import { Image, StyleSheet, Text, Pressable, View ,TouchableOpacity, TouchableWithoutFeedback } from "react-native";


import { useNavigation } from "@react-navigation/native";
import { FontFamily } from "../utilities/GlobalStyles";

const MainScreen = () => {
  const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.navigate('RecommendScreen')
    }
  
    return (
        <LinearGradient
          style={styles.detailScreenFirstPage}
          locations={[0, 1, 1, 1]}
          colors={["#eaa9a9", "#000", "#514e4e", "rgba(0, 0, 0, 0)"]}
        >
         
          <Text style={styles.byPressingStartContainer} numberOfLines={3}>
            {`By  pressing Start, you agree to our `}
            <Text style={styles.termAndCondition}>Term and Condition</Text>
            {` and `}
            <Text style={styles.termAndCondition}>Privacy Statement</Text>
          </Text>

          <Text style={[styles.floodWarningSystem, styles.startFlexBox]}>
            Flood Warning System
          </Text>

          <LinearGradient
        style={[styles.wrapper, styles.button]}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#fdfdfd", "#fda43c"]}
      >
        <Pressable>
        <TouchableOpacity onPress={onPressHandler}>
          <View style={[{ borderRadius: 60, alignItems:"center" }, styles.pressableBg]}>
            <Text style={[styles.start, styles.pressable]}>Start</Text>
          </View>
        </TouchableOpacity>
        </Pressable>

    </LinearGradient>
        
          
          
        </LinearGradient>
      );
    };
    
    const styles = StyleSheet.create({
        wrapper: {
            left: 37,
            top: 500,
            width: 300,
            height: 80,
            position: "absolute",
        },
        pressableBg: {
            backgroundColor: "transparent",
            width: "100%",
          },
        pressable: {
            borderRadius: 67,
            height: "100%",
            flexDirection: "row",
            padding: 10,
          },
        button: {
            backgroundColor: '#fda43c',
            borderRadius: 60,
            
          },
      startFlexBox: {
        textAlign: "center",
        position: "absolute",
      },
      detailScreenFirstPageChild: {
        top: 568,
        left: 37,
        borderRadius: 67,
        width: 333,
        height: 80,
        position: "absolute",
      },
      termAndCondition: {
        textDecoration: "underline",
      },
      byPressingStartContainer: {
        top: 620,
        left: 25,
        fontSize: 21,
        fontWeight: "500",
        fontFamily: FontFamily.robotoMedium,
        color: "#fda43c",
        textAlign: "left",
        width: 374,
        height: 83,
        position: "absolute",
      },
      floodWarningSystem: {
        top: 172,
        
        fontSize: 52,
        fontWeight: "800",
        fontFamily: FontFamily.robotoExtrabold,
        color: "#ffe7e7",
        width: 375,
        height: 134,
      },
      start: {
        fontSize: 36,
        fontWeight: "700",
        fontFamily: FontFamily.robotoBold,
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 323,
        height: 60,
        textAlign: "center",
      },
      detailScreenFirstPage: {
        //borderRadius: Border.br_6xl,
        flex: 1,
        width: "100%",
        height: 896,
        overflow: "hidden",
        backgroundColor: "transparent",
      },
    },);
  
export default MainScreen;  
