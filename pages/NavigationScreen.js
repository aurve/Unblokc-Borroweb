import React from "react";
import { useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChooseLender from "./ChooseLender";
import LenderPage from "./LenderPage";
import Inbox from "./Inbox";
import BorrowerPage from "./BorrowerPage";
import BuySell from "./BuySell";
import HowMuchBorrow from "./HowMuchBorrow";

const HowMuchBorrowScreen = "Lend";
const BorrowerPageScreen = "BorrowerPage";
const InboxScreen = "Inbox";
const BuySellScreen = "BuySell";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreen() { 
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HowMuchBorrow"
        component={HowMuchBorrow}
      />
      <Stack.Screen 
        options={{ headerShown: false }}  
        name="ChooseLender" 
        component={ChooseLender} />
    </Stack.Navigator>
  );
}

const NavigationScreen = () => {
  const route = useRoute();
  // const userID = route.params.userID

  return (
    <Tab.Navigator
      initialRouteName={BorrowerPageScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === BorrowerPageScreen || rn === "Borrower Page") {
            iconName = focused ? "home" : "home";
          } else if (rn === InboxScreen) {
            iconName = focused ? "chatbox-ellipses-outline" : "chatbox-ellipses-outline";
          } else if (rn === HowMuchBorrowScreen || rn == "Lend") {
            iconName = focused ? "cash-outline" : "cash-outline";
          } else if (rn === BuySellScreen || rn === "Buy/Sell") {
            iconName = focused ? "people-outline" : "people-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#004479",
        tabBarInactiveTintColor: "grey",
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Borrower Page"
        component={BorrowerPage}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Inbox"
        component={Inbox}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Lend"
        component={StackScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Buy/Sell"
        component={BuySell}
      />
    </Tab.Navigator>
  );
};

export default NavigationScreen;
