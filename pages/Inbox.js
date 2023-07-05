import React from "react";
import {StyleSheet, Text, Linking, Button, ScrollView, View, 
    Image, TouchableOpacity,} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Inbox() {
  const navigation = useNavigation();
  const route = useRoute();

return (

<ScrollView style={{paddingTop: 50, backgroundColor: "#fff",}}>
    <View style={{paddingHorizontal: 20}}>
        
        {/* Header */}
        <View style={{width: "100%", justifyContent: "space-between", flexDirection: "row"}}>
            <TouchableOpacity>
            <Ionicons name="person-circle-outline" size={32} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Ionicons name="notifications-outline" size={32} />
            </TouchableOpacity>
        </View>

        <View style={{width:"100%", height: 10}}/>

        {/* Messages */}
        <Text style={[styles.font25, styles.bold]}>Messages</Text>
        <View style={{width:"100%", height: 20}}/>
        
        {/* Inbox */}
        <TouchableOpacity>
        <View style={{flexDirection:"row", width: "100%",height: 60}}>
            <View style={{width:'20%',}}>
                <View style={styles.profcircle}/>
            </View>
            <View style={{width: '80%',borderTopWidth: 0.2, borderBottomWidth:0.2,}}>
                <Text style={[styles.font20,]}>Jean Garcia</Text>
                <Text style={[styles.font15,]}>Hello</Text>
            </View>    
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{flexDirection:"row", width: "100%",height: 60}}>
            <View style={{width:'20%',}}>
                <View style={styles.profcircle}/>
            </View>
            <View style={{width: '80%',borderTopWidth: 0.2, borderBottomWidth:0.2,}}>
                <Text style={[styles.font20,]}>Mart Green</Text>
                <Text style={[styles.font15,]}>Greetings</Text>
            </View>    
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={{flexDirection:"row", width: "100%",height: 60}}>
            <View style={{width:'20%',}}>
                <View style={styles.profcircle}/>
            </View>
            <View style={{width: '80%',borderTopWidth: 0.2, borderBottomWidth:0.2,}}>
                <Text style={[styles.font20,]}>Bean Sabine</Text>
                <Text style={[styles.font15,]}>Hey</Text>
            </View>    
        </View>
        </TouchableOpacity>

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