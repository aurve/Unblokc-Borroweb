import React from "react";
import { useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import ChooseLender from "./ChooseLender";
import LenderPage from "./LenderPage";
import Inbox from "./Inbox";
import BorrowerPage from "./BorrowerPage";
import BuySell from "./BuySell";

const Tab = createBottomTabNavigator();

const LenderPageScreen = "LenderPage";
const InboxScreen = "Inbox";
const ChooseLenderScreen = "Lend";
const BuySellScreen = "BuySell";

const NavigationScreenLender = () => {
  const route = useRoute();
  // const userID = route.params.userID

  return (
    <Tab.Navigator
      initialRouteName={LenderPage}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === LenderPageScreen || rn === "Lender Page") {
            iconName = focused ? "home" : "home";
          } else if (rn === InboxScreen) {
            iconName = focused ? "chatbox-ellipses-outline" : "chatbox-ellipses-outline";
          } else if (rn === ChooseLenderScreen) {
            iconName = focused ? "cash-outline" : "cash-outline";
          } else if (rn === BuySellScreen || rn === "Buy/Sell") {
            iconName = focused ? "people-outline" : "people-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#004479",
        inactiveTintColor: "grey",
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Lender Page"
        component={LenderPage}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Inbox"
        component={Inbox}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Lend"
        component={ChooseLender}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Buy/Sell"
        component={BuySell}
      />
    </Tab.Navigator>
  );
};

export default NavigationScreenLender;
