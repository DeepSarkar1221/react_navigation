import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("Search")}>
        Go to Search
      </Button>
    </View>
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
      <Button onPress={() => navigation.navigate("Home")}>Go to Home</Button>
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
            route.name === "Home"
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
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#67a6b3",
          },
          headerTintColor: "#00fab3",
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
