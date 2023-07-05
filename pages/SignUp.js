import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { auth, db } from "../firebase";
import { useNavigation, useRoute } from "@react-navigation/native";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    FirstName: "",
    LastName: "",
    MiddleName: "",
    step: 1,
    UserID: "",
  });

  const handleInputChange = (name, value) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!EMAIL_REGEX.test(inputValues.email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }
    if (!PASSWORD_REGEX.test(inputValues.password)) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 8 characters long and contain at least one letter and one number"
      );
      return;
    }
    if (inputValues.password !== inputValues.confirmPassword) {
      Alert.alert("Passwords do not match", "Please enter matching passwords");
      return;
    }
    auth
      .createUserWithEmailAndPassword(inputValues.email, inputValues.password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert("Success", "Account created successfully");
        const docRef = doc(db, "Users", user.uid);
        setDoc(docRef, {
          FirstName: inputValues.FirstName,
          LastName: inputValues.LastName,
          MiddleName: inputValues.MiddleName,
          Email: inputValues.email,
          UserID: user.uid,
        })
          .then(() => {
            console.log("User data added to Firestore.");
            navigation.navigate("SignIn");
          })
          .catch((error) => {
            console.error("Error adding user data to Firestore:", error);
          });
      })
      .catch((error) => {
        console.error("Error creating account:", error);
        Alert.alert("Error", error.message);
      });
  };

  const handleNextStep = () => {
    if (inputValues.step === 1) {
      if (!EMAIL_REGEX.test(inputValues.email)) {
        Alert.alert("Invalid Email", "Please enter a valid email address");
        return;
      }
      if (!PASSWORD_REGEX.test(inputValues.password)) {
        Alert.alert(
          "Invalid Password",
          "Password must be at least 8 characters long and contain at least one letter and one number"
        );
        return;
      }
      if (inputValues.password !== inputValues.confirmPassword) {
        Alert.alert(
          "Passwords do not match",
          "Please enter matching passwords"
        );
        return;
      }
      setInputValues({
        ...inputValues,
        step: 2,
      });
    }
  };

  const handlePreviousStep = () => {
    if (inputValues.step === 2) {
      setInputValues({
        ...inputValues,
        step: 1,
      });
    }
  };

  return (
    <View style={styles.opencontainer}>
      {/*Header*/}
      <View style={styles.container}>
        <Text style={styles.text2}>Welcome to SAGIP!</Text>
        <Text style={styles.text3}>
          We are pleased too serve you! Let's get started by Creating an
          Account.
        </Text>
      </View>
      {/*Input account details*/}
      {inputValues.step === 1 && (
        <>
          {/*Email*/}
          <View>
            <Text style={styles.text1}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              onChangeText={(text) => handleInputChange("email", text)}
              value={inputValues.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/*Password*/}
          <View>
            <Text style={styles.text1}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              onChangeText={(text) => handleInputChange("password", text)}
              value={inputValues.password}
              secureTextEntry={true}
            />
          </View>

          {/*Confirm Password*/}
          <View>
            <Text style={styles.text1}>Confirm Password</Text>
            <TextInput
              style={[styles.input, { marginBottom: 20 }]}
              placeholder=""
              onChangeText={(text) =>
                handleInputChange("confirmPassword", text)
              }
              value={inputValues.confirmPassword}
              secureTextEntry={true}
            />
          </View>

          {/*Next Button*/}
          <TouchableOpacity onPress={handleNextStep}>
            <View style={[styles.centerall, styles.nextbutton]}>
              <Text style={{ color: "white", fontSize: 17, fontWeight: "700" }}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </>
      )}

      {inputValues.step === 2 && (
        <>
          {/*First Name*/}
          <View>
            <Text style={styles.text1}>First Name:</Text>
            <TextInput
              style={[styles.input, { marginBottom: 20 }]}
              placeholder=""
              onChangeText={(text) => handleInputChange("FirstName", text)}
              value={inputValues.FirstName}
            />
          </View>

          {/*Last Name*/}
          <View>
            <Text style={styles.text1}>Last Name:</Text>
            <TextInput
              style={[styles.input, { marginBottom: 20 }]}
              placeholder=""
              onChangeText={(text) => handleInputChange("LastName", text)}
              value={inputValues.LastName}
            />
          </View>

          {/*Last Name*/}
          <View>
            <Text style={styles.text1}>Middle Name:</Text>
            <TextInput
              style={[styles.input, { marginBottom: 20 }]}
              placeholder=""
              onChangeText={(text) => handleInputChange("MiddleName", text)}
              value={inputValues.MiddleName}
            />
          </View>

          {/*Back Button*/}
          <TouchableOpacity
            onPress={handlePreviousStep}
            style={{ marginBottom: 20 }}
          >
            <View style={[styles.centerall, styles.nextbutton]}>
              <Text style={{ color: "white", fontSize: 17, fontWeight: "700" }}>
                Back
              </Text>
            </View>
          </TouchableOpacity>

          {/*Sign Up Button*/}
          <TouchableOpacity onPress={handleSubmit}>
            <View style={[styles.centerall, styles.nextbutton]}>
              <Text style={{ color: "white", fontSize: 17, fontWeight: "700" }}>
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
        </>
      )}

      {/*Already have an account?*/}
      <View style={[styles.centerall, { paddingVertical: 10 }]}>
        <Text numberOfLines={1}>
          <Text style={{ fontSize: 14 }}>Already have an account? </Text>
          <Text
            style={{ color: "#DD4438", fontSize: 13 }}
            onPress={() => navigation.navigate("SignIn")}
          >
            Login Now
          </Text>
        </Text>
      </View>

      {/* Or with */}
      <View style={styles.orwith}>
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "#FFFFFF",
            width: 100,
            top: 70,
            left: "50%",
            transform: [{ translateX: -50 }, { translateY: -50 }],
          }}
        >
          Or with
        </Text>
      </View>

      <View style={{ width: "100%", height: 20 }} />
      {/*Sign in with*/}
      <View style={[styles.centerall, { paddingVertical: 10 }]}>
        {/*Apple*/}
        <TouchableOpacity>
          <View
            style={[
              styles.centerall,
              styles.signinwithbutton,
              { backgroundColor: "black" },
            ]}
          >
            <Text style={{ fontSize: 15, color: "#fff" }}>
              Sign in with Apple
            </Text>
          </View>
        </TouchableOpacity>

        {/*Google*/}
        <TouchableOpacity>
          <View
            style={[
              styles.centerall,
              styles.signinwithbutton,
              { backgroundColor: "white", borderWidth: 0.3, marginTop: 10 },
            ]}
          >
            <Text style={{ fontSize: 15 }}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  opencontainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 65,
  },

  nextbutton: {
    backgroundColor: "#DD4438",
    width: "100%",
    height: 40,
    borderRadius: 10,
  },

  signinwithbutton: {
    width: 300,
    height: 44,
    borderRadius: 10,
  },

  orwith: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginVertical: 10,
    width: "100%",
  },

  centerall: {
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#D9D9D9",
  },

  text2: {
    fontSize: 32,
    fontWeight: "bold",
    paddingVertical: 0,
  },

  text3: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default SignUp;
