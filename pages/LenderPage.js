import React from "react";
import {StyleSheet, Text, Linking, Button, ScrollView, View, 
    Image, TouchableOpacity,} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function LenderPage() {
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

        

        {/* Earnings */}
        <Text style={[styles.font25, styles.bold]}>Earnings</Text>
        <View style={{width:"100%", height: 20}}/>
        
        <View style={[styles.centerall,{width: "100%", height: 130, borderRadius: 15,
                  backgroundColor: "black",}]}>
            <Text style={[styles.font20,{color:'#fff'}]}>This week</Text>
            <Text style={[styles.font30,styles.bold,{color:'#fff'}]}>Php 7,107</Text>
            <View style={{width:"100%", height: 5}}/>
            <Text style={[styles.font13,{color:'#fff'}]}>See detailed report</Text>
        </View>    

        <View style={{width:"100%", height: 20}}/>

        {/* Overview */} 
        <Text style={[styles.font25, styles.bold]}>Overview</Text>
        <View style={{width:"100%", height: 20}}/>
        <View style={[styles.centerall,{width:'100%',height:360,borderWidth:0.2,
                    borderRadius: 10}]}>
            <Image style={{ width: 280, height: 350 }}
                source={require("../assets/OverviewContent.png")}/>
        </View>

        <View style={{width:"100%", height: 20}}/>

        {/* Active Loans */}
        <Text style={[styles.font25, styles.bold]}>Active Loans</Text>
        
        <View style={{width: "100%", height: 220, padding: 15,
            borderRadius: 5, borderWidth: 0.2, paddingTop: 20, marginTop: 20}}>
            <View style={{flexDirection: "row", justifyContent:"space-between", marginBottom: 20}}>
                <View style={{justifyContent: "center"}}>
                <Text style={[styles.font20,styles.bold]}>Buffay, Phoebe</Text>
                </View>

                <View style={{justifyContent: "center"}}>
                <TouchableOpacity>
                <Text style={[styles.font13,styles.safetyblue]}>Transaction History</Text>
                </TouchableOpacity>
                </View>
            </View>
            <Text style={[styles.font13,styles.gray]}>Remaining Balance of:</Text>
            <View style={{width:"100%", height: 5}}/>

            <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                <Text style={[styles.font23,styles.bold]}>Php 1,051</Text>

                <View style={[styles.centerall,{width: 100, height: 30, marginBottom:15,
                    borderRadius: 15,backgroundColor: '#f8f8f8'}]}>
                    <Text style={[styles.font13,styles.gray]}>Due April 19</Text>
                </View>
            </View>
            
            <View style={styles.centerall}>
                <Text style={styles.font15}>May due successfully paid</Text>
                <View style={[styles.centerall, {width: 150, height: 35,
                    backgroundColor:'#cedff2', marginTop: 15, borderRadius: 25}]}>
                <Text style={[styles.font13,styles.safetyblue]}>Message Phoebe</Text>
                </View>
            </View>

        </View>

        <View style={{width: "100%", height: 220, padding: 15,
            borderRadius: 5, borderWidth: 0.2, paddingTop: 20, marginTop: 20}}>
            <View style={{flexDirection: "row", justifyContent:"space-between", marginBottom: 20}}>
                <View style={{justifyContent: "center"}}>
                <Text style={[styles.font20,styles.bold]}>Green, Rachel</Text>
                </View>

                <View style={{justifyContent: "center"}}>
                <TouchableOpacity>
                <Text style={[styles.font13,styles.safetyblue]}>Transaction History</Text>
                </TouchableOpacity>
                </View>
            </View>
            <Text style={[styles.font13,styles.gray]}>Remaining Balance of:</Text>
            <View style={{width:"100%", height: 5}}/>

            <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                <Text style={[styles.font23,styles.bold]}>Php 0</Text>

                <View style={[styles.centerall,{width: 130, height: 30, marginBottom:15,
                    borderRadius: 15,backgroundColor: '#f8f8f8'}]}>
                    <Text style={[styles.font13,styles.gray]}>Paid last May 17</Text>
                </View>
            </View>
            
            <View style={styles.centerall}>
                <Text style={styles.font15}>May due successfully paid</Text>
                <View style={[styles.centerall, {width: 150, height: 35,
                    backgroundColor:'#cedff2', marginTop: 15, borderRadius: 25}]}>
                    <Text style={[styles.font13,styles.safetyblue]}>Message Rachel</Text>
                </View>
            </View>
        </View>       
            
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