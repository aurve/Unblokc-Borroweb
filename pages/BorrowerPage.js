import React from "react";
import {StyleSheet, Text, Linking, Button, ScrollView, View, 
    Image, TouchableOpacity,} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function BorrowerPage() {
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

        <View style={{width:"100%", height: 30}}/>

        {/* Balance */}
        <View style={{width: "100%", height: 170, padding: 15, justifyContent: "center",
                      borderRadius: 5, borderWidth: 0.2}}>
            
            {/* For separation */}
            <View style={{width: "100%", justifyContent: "space-between", flexDirection: "row"}}>
                <View style={{width: "90%", height: 90}}>
                <Text style={[styles.font25, styles.bold]}>Php 7,107</Text>
                <Text style={[styles.font15, styles.gray]}>Account Balance</Text>
                </View>
                <View style={{width: "10%", height: 90}}>
                    <TouchableOpacity>
                    <Ionicons name="eye-outline" size={32} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{width: "100%", flexDirection: "row"}}>
                <View style={{height: 35, width: 90, borderRadius: 15, alignItems: 'center',
                              justifyContent: 'center',backgroundColor: 'black', marginRight: 10}}>
                <TouchableOpacity>
                <Text style={{color: '#fff'}}>Cash in</Text>
                </TouchableOpacity>
                </View>
                <View style={{height: 35, width: 90, borderRadius: 15, alignItems: 'center',
                              justifyContent: 'center',backgroundColor: '#f8f8f8', marginRight: 10}}>
                <TouchableOpacity>
                <Text style={{color: '#969799'}}>Pay Loan</Text>
                </TouchableOpacity>
                </View>
            </View>

        </View> 
        
        <View style={{width:"100%", height: 20}}/>

        {/* Knowledge Base */}
        <ScrollView horizontal={true}> 
            <View style={{width: 310, height: 180, marginRight: 5,}}>
                {/* For separation */}   
                <View style={{width: "100%", height: 140, padding: 15, backgroundColor:'#004479',
                            borderRadius: 15,}}>
                <View style={{flexDirection: "row"}}>
                    <View style={{width:"55%", justifyContent:"center"}}>
                    <Text style={[styles.bold,styles.font23,{color:'#fff'}]}>What is Web3?</Text>
                    <Text style={[styles.font10,{color:'#fff'}]}>And how can you earn from it?</Text>
                    <View style={{width:"100%", height: 10}}/>
                    <TouchableOpacity>
                    <Text style={[styles.font13,{color:'#969799'}]}>Find out here</Text>
                    </TouchableOpacity>
                    </View>
                    
                    <View style={{width:"45%", justifyContent:"center", marginLeft: 15}}>
                        <View style={[styles.centerall,{width: 100, height: 100, borderWidth: 1,
                                    borderRadius: 10,borderColor: '#fff'}]}>
                        <Image style={{ width: 120, height: 120}}
                        source={require("../assets/CoinPicture.png")}/>
                        </View>
                    </View>
                </View>
                </View>

                {/* Learn more text */}
                <View style={{width:"100%", height: 10}}/>
                <Text style={styles.gray}>Learn more about WEB3</Text>
            </View>

            <View style={{width: 310, height: 180, marginRight: 5,}}>
                {/* For separation */}   
                <View style={{width: "100%", height: 140, padding: 15, backgroundColor:'#004479',
                            borderRadius: 15,}}>
                <View style={{flexDirection: "row"}}>
                    <View style={{width:"55%", justifyContent:"center"}}>
                    <Text style={[styles.bold,styles.font23,{color:'#fff'}]}>What is Web3?</Text>
                    <Text style={[styles.font10,{color:'#fff'}]}>And how can you earn from it?</Text>
                    <View style={{width:"100%", height: 10}}/>
                    <TouchableOpacity>
                    <Text style={[styles.font13,{color:'#969799'}]}>Find out here</Text>
                    </TouchableOpacity>
                    </View>
                    
                    <View style={{width:"45%", justifyContent:"center", marginLeft: 15}}>
                        <View style={[styles.centerall,{width: 100, height: 100, borderWidth: 1,
                                    borderRadius: 10,borderColor: '#fff'}]}>
                        <Image style={{ width: 120, height: 120}}
                        source={require("../assets/CoinPicture.png")}/>
                        </View>
                    </View>
                </View>
                </View>

                {/* Learn more text */}
                <View style={{width:"100%", height: 10}}/>
                <Text style={styles.gray}>Learn more about WEB3</Text>
            </View>
        </ScrollView>
        
        <View style={{width:"100%", height: 20}}/>

        {/* Credit Score */}
        <View style={{width: "100%", height: 420, borderRadius: 10, borderWidth: 0.2, padding: 15}}>
            <View style={{justifyContent: "space-between",flexDirection: "row", paddingTop: 10}}>
                <View style={{width: "60%", height: 40, justifyContent: "center"}}>
                    <Text style={[styles.font20,styles.bold]}>Credit Score</Text>
                </View> 

                <View style={{width: "40%", height: 40, backgroundColor: '#cedff2', borderRadius: 20,
                            alignItems: "center",justifyContent: "center"}}>
                    <TouchableOpacity>
                    <Text style={[styles.font13, {color: '#004479'}]}>Learn more</Text>
                    </TouchableOpacity>
                </View> 
            </View>

            <View style={{width:"100%", height: 40}}/>

            <View style={styles.centerall}>
                <Image style={{ width: 120, height: 120}}
                    source={require("../assets/CreditScoreGauge.png")}/>

                <Text style={styles.font25}>745 / 100</Text>
                <Text style={[styles.font15,styles.bold,styles.gray]}>Good Score</Text>
                <View style={{width:"100%", height: 40}}/>
                <Text style={{textAlign: "center", paddingHorizontal: 30}}>You're in a good shape. Better score can help your lend more and get credit at attractive interest rates.</Text>
            </View>
        </View>

        <View style={{width:"100%", height: 20}}/>

        {/* Mission to increase credit*/}
        <Text style={styles.maccheese}>Missions to increase your credit</Text>
        <View style={{width:"100%", height: 20}}/>

        <ScrollView horizontal={true}> 
            <View style={{width: 200, height: 140, marginRight: 5,}}>
                {/* For separation */}   
                <View style={{width: "100%", height: 140, padding: 15, backgroundColor:'#004479',
                            borderRadius: 15,}}>
                    <View style={{width:"90%", justifyContent:"center"}}>
                    <Text style={[styles.bold,styles.font23,{color:'#fff'}]}>Learn</Text>
                    <View style={{width:"100%", height: 10}}/>
                    <Text style={[styles.font15,{color:'#fff'}]}>Educational contents in Borroweb gives credit scores!</Text>
                    </View>
                </View>
            </View>

            <View style={{width: 200, height: 140, marginRight: 5,}}>
                {/* For separation */}   
                <View style={{width: "100%", height: 140, padding: 15, backgroundColor:'#f8f8f8',
                            borderRadius: 15,}}>
                    <View style={{width:"90%", justifyContent:"center"}}>
                    <Text style={[styles.bold,styles.font23,{color:'#004479'}]}>Lend & Earn</Text>
                    <View style={{width:"100%", height: 10}}/>
                    <Text style={[styles.font15,{color:'#004479'}]}>Lending provides most credit in Borroweb!</Text>
                    </View>
                </View>
            </View>
        </ScrollView>

        {/* Footer */}
        <View style={{width:"100%", height: 150}}/>
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

    oxblue:{color: "#002147",}, bgoxblue:{backgroundColor: "#002147",},
    white:{color: "#fff",},
    safetyblue:{color: "#004479",},
    maccheese:{color: "#FFBA6C",},
    lightorange:{color: "#FFDEB8",},    
    gray: {color:"#969799"},

    font5:{fontSize: 5,}, font8:{fontSize: 8,}, font10:{fontSize: 10,}, font13:{fontSize: 13,},  
    font15:{fontSize: 15,}, font20:{fontSize: 20,}, font23:{fontSize: 23,}, font25:{fontSize: 25,},
    font30:{fontSize: 30,}, bold:{fontWeight: "bold",},
});