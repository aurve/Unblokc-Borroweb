import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//import { createButtonNavigator } from "@react-navigation/bottom-tabs";
//import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
//import SignIn from "./pages/SignIn";
//import SignUp from "./pages/SignUp";
import NavigationScreen from "./pages/NavigationScreen";
import LenderPage from "./pages/LenderPage";
import BorrowerPage from "./pages/BorrowerPage";
import Inbox from "./pages/Inbox";
import ChooseLorB from "./pages/ChooseLorB";

import ChooseLender from "./pages/ChooseLender";
import NavigationScreenLender from "./pages/NavigationScreenLender";
import BuySell from "./pages/BuySell";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*<Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />*/}
        <Stack.Screen
          name="ChooseLorB"
          component={ChooseLorB}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NavigationScreen"
          component={NavigationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NavigationScreenLender"
          component={NavigationScreenLender}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BorrowerPage"
          component={BorrowerPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LenderPage"
          component={LenderPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Inbox"
          component={Inbox}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChooseLender"
          component={ChooseLender}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BuySell"
          component={BuySell}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
