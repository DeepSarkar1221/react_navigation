import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import Details from "../../screens/Details";
import Profile from "../../screens/Profile";

const stack = createNativeStackNavigator();

function Mystack() {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#67a6b3",
        },
        headerTintColor: "#00fab3",
      }}
    >
      <stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "DashBoard",
          headerStyle: {
            backgroundColor: "#67a6b3",
          },
          headerTintColor: "#00fab3",
          animation: "slide_from_left",
        }}
      ></stack.Screen>
      <stack.Screen name="Detail" component={Details} />
      <stack.Screen name="Profiles" component={Profile} />
    </stack.Navigator>
  );
}

export default function DynamicStackNavigstor() {
  return (
    <NavigationContainer>
      <Mystack />
    </NavigationContainer>
  );
}
