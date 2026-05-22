import * as React from "react";
import { View, Text } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Details from "./src/screens/Details";
import Profile from "./src/screens/Profile";
import StaticStackNavigator from "./src/navigator/stack/StaticStackNavigator";
import DynamicStackNavigstor from "./src/navigator/stack/DynamicStackNavigator";



export default function App(){
  return ( 
    <DynamicStackNavigstor/>
  )
}
