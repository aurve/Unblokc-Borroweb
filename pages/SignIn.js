import React, { useState } from "react";
import {View,TextInput,TouchableOpacity,StyleSheet,Text,Alert,Image,} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Firebase Authentication
import { auth } from "../firebase";

const SignIn = () => {
  // Navigation and route
  const navigation = useNavigation();
  const route = useRoute();

  const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [InputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (name, value) => {
    setInputValues({
      ...InputValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!EMAIL_REGEX.test(InputValues.email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }
    if (!PASSWORD_REGEX.test(InputValues.password)) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
      return;
    }
    auth
      .signInWithEmailAndPassword(InputValues.email, InputValues.password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert("Success", "Account Login successfully");
        navigation.navigate("NavigationScreen");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>

      {/* Borroweb Logo */}
      <View style={[styles.centerall,]}>
        <Image style={{ width: 100, height: 150 }}
                source={require("../assets/Spider.png")}/>
        <Text styles={{numberOfLines: 1}}>
          <Text style={[styles.font30,styles.bold]}>Borro</Text>
          <Text style={[styles.font30,styles.bold, styles.maccheese]}>web</Text>
        </Text>
      </View>

      <View style={{width: '100%', height: 20}}/>

      {/* Sign In Text */}
      <Text style={[styles.font25, styles.bold]}>Sign In</Text>
      <View style={{width: '100%', height: 20}}/>

      {/* Email Place holder */}
        <Text style={[styles.font15,styles.bold]}>Email</Text>
        <TextInput style={styles.input}
          placeholder=""
          onChangeText={(text) => handleInputChange("email", text)}
          value={InputValues.email}
          keyboardType="email-address"
          autoCapitalize="words"
        />

      {/* Password Place holder */}
      <View>
        <Text style={[styles.font15,styles.bold]}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          onChangeText={(text) => handleInputChange("password", text)}
          value={InputValues.password}
          secureTextEntry={true}
        />
      </View>

      <View style={{width: '100%', height: 5}}/>

      {/* Sign In Button */}
      <TouchableOpacity onPress={handleSubmit}>
        <View style={[styles.centerall, styles.signinbutton,]}>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "700"}}>
            Sign In
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{width: '100%', height: 10}}/>

      {/* Or with */}
      <View style={styles.centerall}>
        <Text style={styles.gray}>
          Or sign in with
        </Text>
      </View>
      
      <View style={{width: '100%', height: 10}}/>

      {/*Sign in with*/}
      <View style={{width:'100%',height: 80,}}>
        {/*For separation*/}
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            {/*Apple*/}
            <View style={[styles.centerall,{width:'30%', height:50, 
                          borderRadius: 8 ,borderWidth: 0.2,}]}>
              <TouchableOpacity>
                <Image style={{ width: 25, height: 25 }}
                source={require("../assets/AppleLogo.png")}/>
              </TouchableOpacity>
            </View>
            
            {/*Google*/}
            <View style={[styles.centerall,{width:'30%', height:50, 
                          borderRadius: 8 ,borderWidth: 0.2,}]}>
              <TouchableOpacity>
              <Image style={{ width: 25, height: 25 }}
                source={require("../assets/GoogleLogo.png")}/>
              </TouchableOpacity>
            </View>

            {/*Facebook*/}
            <View style={[styles.centerall,{width:'30%', height:50, 
                          borderRadius: 8 ,borderWidth: 0.2,}]}>
              <TouchableOpacity>
              <Image style={{ width: 25, height: 25 }}
                source={require("../assets/FBLogo.png")}/>
              </TouchableOpacity>
            </View>
        </View>
        
      </View>
      
      {/* Dont Have an Account yet? */}
      <View style={[styles.centerall,]}>
        <Text numberOfLines={1}>
          <Text style={{ fontSize: 13 }}>Don’t have an account? </Text>
            <Text style={{ color: "#004479", fontSize: 13 }}
              onPress={() => navigation.navigate("SignUp")}>
              Register</Text>
          </Text>
      </View>

      {/* Footer */}
      <View style={{width: '100%', height: 150}}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 65,
  },

  input: {
    width: '100%',
    height: 40,
    marginBottom: 20,
    padding: 10,
    borderWidth: 0.2,
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

  signinbutton: {
    backgroundColor: "#002147",
    width: "100%",
    height: 50,
    borderRadius: 10,
  },
  centerall: {
    justifyContent: "center",
    alignItems: "center",
  },

});

export default SignIn;
