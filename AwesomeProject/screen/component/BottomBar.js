import React from 'react';
import { FlatList, Text, View, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const BottomBar = ({ selectedDevices,screenName }) => {
    const navigation = useNavigation();
    const handleSelectDevice = (item) => {
        navigation.navigate('DetailScreen', {
            selectedDevices: selectedDevices,
            item: item
    })
    }
  return (
    <View>
      <FlatList
        horizontal
        data={selectedDevices}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item }) => {
            const backgroundColor = item.name === screenName ? '#C2771E' : 'transparent';
            return <TouchableOpacity style={{ alignItems: 'center'  }} onPress={() => handleSelectDevice(item)}>
                <Image 
                        style ={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                            padding:10,
                            marginTop:10,
                            marginHorizontal: 10,
                            backgroundColor

                        }}
                        source={require('../../assets/image/enapter-power-supply-unit-2.png')}
                    />
                    <Text style={{fontWeight:'regular',color:'black'}}>{item.name}</Text>

            </TouchableOpacity>
        }}
      />
    </View>
  );
};

export default BottomBar;