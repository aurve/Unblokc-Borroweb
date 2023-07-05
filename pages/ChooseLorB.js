import React from "react";
import {StyleSheet, Text, Linking, Button, ScrollView, View, 
    Image, TouchableOpacity,} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import NavigationScreenLender from "./NavigationScreenLender";
import NavigationScreen from "./NavigationScreen";

export default function ChooseLorB() {
  const navigation = useNavigation();
  const route = useRoute();

return (

<ScrollView style={{paddingTop: 50, backgroundColor: "#fff",}}>
    <View style={{paddingHorizontal: 20}}>
        
        <View style={{width:"100%", height: 10}}/>

        <View style={[styles.centerall, {width: '100%', height: 300}]}>
            <TouchableOpacity onPress={() => navigation.navigate(NavigationScreenLender)}>
            <View style={[styles.centerall,{width: 150, height: 50,
                borderRadius: 5, borderWidth: 0.2,}]}>
                <Text>I am a lender</Text>
            </View>
            </TouchableOpacity>

            <View style={{width:"100%", height: 10}}/>

            <TouchableOpacity onPress={() => navigation.navigate(NavigationScreen)}>
            <View style={[styles.centerall,{width: 150, height: 50,
                borderRadius: 5, borderWidth: 0.2,}]}>
                <Text>I am a borrower</Text>
            </View>
            </TouchableOpacity>

        </View>


        <View style={{width:"100%", height: 20}}/>
   
            
        {/* Footer */}
        <View style={{width:"100%", height: 120}}/>
    </View>
</ScrollView>);
}

const styles = StyleSheet.create({
    centerall:{justifyContent: "center",alignItems: "center",},

    profcircle:{
        width: 50, 
        height: 50,
        borderRadius: 50/2,
        backgroundColor:"#969799",
    },

    progcircle:{
        width: 60, 
        height: 60,
        borderRadius: 60/2,
        backgroundColor:"#969799",
    },

    oxblue:{color: "#002147",},
    white:{color: "#fff",},
    safetyblue:{color: "#004479",},
    maccheese:{color: "#FFBA6C",},
    lightorange:{color: "#FFDEB8",},    
    gray: {color:"#969799"},

    font5:{fontSize: 5,}, font8:{fontSize: 8,}, font10:{fontSize: 10,}, font13:{fontSize: 13,},  
    font15:{fontSize: 15,}, font18:{fontSize: 18,}, font20:{fontSize: 20,}, font23:{fontSize: 23,}, font25:{fontSize: 25,},
    font30:{fontSize: 30,}, bold:{fontWeight: "bold",},
});