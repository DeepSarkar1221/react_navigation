import * as React from "react";
import { Text, View } from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DynamicTabNavigator from "./src/navigator/tabs/DynamicTabNavigator";
import StaticDrawer from "./src/navigator/drawer/StaticDrawer";
import DynamicDrawer from "./src/navigator/drawer/DynamicDrawer";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("Profile")}>
        Go to Profile
      </Button>
    </View>
  );
}

function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate("Home")}>Go to Home</Button>
    </View>
  );
}

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "DashBoard",
        headerTintColor: "#00fab3",
        headerStyle: {
          backgroundColor: "#67a6b3",
        },
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        title: "Profile",
        headerTintColor: "#00fab3",
        headerStyle: {
          backgroundColor: "#67a6b3",
        },
      },
    },
    
  },
  screenOptions: {
    tabBarActiveTintColor: "#00fab3",
    tabBarActiveBackgroundColor: "#4badc1",
    tabBarInactiveBackgroundColor: "#67a6b3",
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return <DynamicDrawer/>;
}
