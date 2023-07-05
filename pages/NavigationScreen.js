import React from "react";
import { useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import ChooseLender from "./ChooseLender";
import LenderPage from "./LenderPage";
import Inbox from "./Inbox";
import BorrowerPage from "./BorrowerPage";
import BuySell from "./BuySell";
import HowMuchBorrow from "./HowMuchBorrow";

const Tab = createBottomTabNavigator();

const HowMuchBorrowScreen = "Lend";
const BorrowerPageScreen = "BorrowerPage";
const InboxScreen = "Inbox";
const ChooseLenderScreen = "Lend";
const BuySellScreen = "BuySell";

const NavigationScreen = () => {
  const route = useRoute();
  // const userID = route.params.userID

  return (
    <Tab.Navigator
      initialRouteName={BorrowerPage}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === BorrowerPageScreen || rn === "Borrower Page") {
            iconName = focused ? "home" : "home";
          } else if (rn === InboxScreen) {
            iconName = focused ? "chatbox-ellipses-outline" : "chatbox-ellipses-outline";
          } else if (rn === HowMuchBorrow || rn == "Lend") {
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
        component={HowMuchBorrow}
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
