import { ScrollView, StyleSheet, Text, View, SafeAreaSafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChooseLender from "./ChooseLender";

//How Much Are You Going to Borrow????
const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default function HowMuchBorrow() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    
    <ScrollView style={{paddingTop: 50, backgroundColor: "#fff",}}>
      <View style={{paddingHorizontal: 20}}>
      <DismissKeyboard> 
      <View style={styles.custom}>
      <Text style={styles.header}>How much are you planning to borrow?</Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
      placeholder='Amount (PHP)' />
      </View>
      </DismissKeyboard>
      <View style={styles.button}>
      <TouchableOpacity onPress={() => navigation.navigate(ChooseLender)}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 30,
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 1,
    marginRight: 20,
  },
  body: {
    fontSize:13,
    marginLeft: 22,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
  },
  centered: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
  custom: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 100,
    
  },
  buttonText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 10,
    width: 300,
    height: 40,
    backgroundColor: '#004479',
    marginBottom: -100,
  },
  images: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
