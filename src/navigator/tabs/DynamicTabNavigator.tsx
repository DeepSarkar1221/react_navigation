import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import Details from "../../screens/Details";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#67a6b3",
        },
        headerTintColor: "#00fab3",
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen}></HomeStack.Screen>
      <HomeStack.Screen name="Details" component={Details}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

function SearchScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Search Screen</Text>
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
      <Button onPress={() => navigation.navigate("OverView")}>Go to Home</Button>
    </View>
  );
}

const tab = createBottomTabNavigator();

function Mytab() {
  return (
    <tab.Navigator
      initialRouteName="Search"
      screenOptions={({ route }) => ({
        // tabBarActiveTintColor: "tomato",
        tabBarActiveBackgroundColor: "#19d6d6",
        tabBarInactiveTintColor: "tomato",
        tabBarIcon: ({ focused, color, size }) => {
          const icon =
            route.name === "OverView"
              ? focused
                ? "home"
                : "home-outline"
              : route.name === "Search"
                ? focused
                  ? "search"
                  : "search-outline"
                : focused
                  ? "chatbubble"
                  : "chatbubble-outline";

          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      <tab.Screen
        name="OverView"
        component={HomeStackScreen}
        options={{
          headerShown:false
        }}
      />
      <tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerStyle: {
            backgroundColor: "#67a6b3",
          },
          headerTintColor: "#00fab3",
        }}
      />
      <tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: "#67a6b3",
          },
          headerTintColor: "#00fab3",
          tabBarBadge: 16,
        }}
      />
    </tab.Navigator>
  );
}

export default function DynamicTabNavigator() {
  return (
    <NavigationContainer>
      <Mytab />
    </NavigationContainer>
  );
}
