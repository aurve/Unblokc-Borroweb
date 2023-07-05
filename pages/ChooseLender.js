import React, { useState } from "react";
import {StyleSheet, Text, Linking, Button, ScrollView, View, 
    Image, TouchableOpacity,} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation, useRoute } from "@react-navigation/native";

const data = [
    { label: '50', value: '1' },
    { label: '100', value: '2' },
  ];

const data2 = [
    { label: '1', value: '3' },
    { label: '7', value: '4' },
  ];

const data3 = [
    { label: '0.5', value: '5' },
    { label: '0.3', value: '6' },
];

export default function ChooseLender() {
  const navigation = useNavigation();
  const route = useRoute();
  const [PopularityData, setPopularityData] = useState([]);
  const [DurationData, setDurationData] = useState([]);
  const [InterestRateData, setInterestRateData] = useState([]);
  const [PopularityValue, PopularitysetValue] = useState(null);
  const [DurationValue, DurationsetValue] = useState(null);
  const [InterestRateValue, InterestRatesetValue] = useState(null);
  const [PopularityisFocus, PopularitysetIsFocus] = useState(false);
  const [DurationisFocus, DurationsetIsFocus] = useState(false);
  const [InterestRateisFocus, InterestRatesetIsFocus] = useState(false);

return (

<ScrollView style={{paddingTop: 50, backgroundColor: "#fff",}}>
    <View style={{paddingHorizontal: 20}}>
        
        {/* Choose your Lender */}
        <Text style={[styles.font25,styles.bold]}>Choose your Lender</Text>
        <View style={{width:"100%", height: 20}}/>

        {/* Drop downs */}
        <View style={{width: "100%", flexDirection: "row"}}>
            {/* Popularity */}
            <View style={{width: "33.3%", height: 50}}>
                <Text style={{paddingBottom: 5}}>Popularity</Text>
                <Dropdown style={[styles.dropdown, PopularityisFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!PopularityisFocus ? 'Select' : '...'}
                    searchPlaceholder="Search..."
                    value={PopularityValue}
                    onFocus={() => PopularitysetIsFocus(true)}
                    onBlur={() => PopularitysetIsFocus(false)}
                    onChange={item => {
                        PopularitysetValue(item.value);
                        PopularitysetIsFocus(false);
                    }}
                />
            </View>

            {/* Duration */}
            <View style={{width: "33.3%", height: 50}}>
                <Text style={{paddingBottom: 5}}>Duration</Text>
                <Dropdown style={[styles.dropdown, DurationisFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={data2}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!DurationisFocus ? 'Select' : '...'}
                    searchPlaceholder="Search..."
                    value={DurationValue}
                    onFocus={() => DurationsetIsFocus(true)}
                    onBlur={() => DurationsetIsFocus(false)}
                    onChange={item => {
                        DurationsetValue(item.value);
                        DurationsetIsFocus(false);
                    }}
                />
            </View>

            {/* Interest Rate */}
            <View style={{width: "33.3%", height: 50}}>
                <Text style={{paddingBottom: 5}}>Interest Rate</Text>
                <Dropdown style={[styles.dropdown, InterestRateisFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.font13}
                    selectedTextStyle={styles.font13}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={data3}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!InterestRateisFocus ? 'Select' : '...'}
                    searchPlaceholder="Search..."
                    value={InterestRateValue}
                    onFocus={() => InterestRatesetIsFocus(true)}
                    onBlur={() => InterestRatesetIsFocus(false)}
                    onChange={item => {
                        InterestRatesetValue(item.value);
                        InterestRatesetIsFocus(false);
                    }}
                />
            </View>
        </View>

        <View style={{width:"100%", height: 30}}/>

        {/* Best Value */}
        <Text style={[styles.font15]}>Best Value</Text>
        <View style={{width:"100%", height: 15}}/>
        
            <TouchableOpacity>
            <View style={{width: "100%", height: 140, padding: 10, marginBottom: 15,
                  borderRadius: 10, borderWidth: 0.2}}>
                <View style={[styles.bggray,{width: "100%", height: 60, borderRadius: 15,marginBottom: 5,}]}/>
                <Text style={styles.font13}>Interest: </Text>
                <Text style={styles.font13}>Amount to receive:: </Text>
                <Text style={styles.font13}>Monthly charge: </Text>
            </View>    
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{width: "100%", height: 140, padding: 10, marginBottom: 15,
                  borderRadius: 10, borderWidth: 0.2}}>
                <View style={[styles.bggray,{width: "100%", height: 60, borderRadius: 15,marginBottom: 5,}]}/>
                <Text style={styles.font13}>Interest: </Text>
                <Text style={styles.font13}>Amount to receive:: </Text>
                <Text style={styles.font13}>Monthly charge: </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{width: "100%", height: 140, padding: 10, marginBottom: 15,
                  borderRadius: 10, borderWidth: 0.2}}>
                <View style={[styles.bggray,{width: "100%", height: 60, borderRadius: 15,marginBottom: 5,}]}/>
                <Text style={styles.font13}>Interest: </Text>
                <Text style={styles.font13}>Amount to receive:: </Text>
                <Text style={styles.font13}>Monthly charge: </Text>
            </View>
            </TouchableOpacity>

        <View style={{width:"100%", height: 20}}/>
  

        <View style={{width:"100%", height: 70}}/>
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
    bggray: {backgroundColor:"#e7e7e7"},

    font5:{fontSize: 5,}, font10:{fontSize: 10,}, font13:{fontSize: 13,}, font15:{fontSize: 15,},
    font20:{fontSize: 20,}, font25:{fontSize: 25,}, font30:{fontSize: 30,}, bold:{fontWeight: "bold",},

    dropdown: {
        height: 30,
        width: "90%",
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },

      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },

      inputSearchStyle: {
        height: 30,
        fontSize: 13,
      },

});