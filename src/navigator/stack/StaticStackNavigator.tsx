import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import Details from "../../screens/Details";
import Profile from "../../screens/Profile";
import { createStaticNavigation } from "@react-navigation/native";

const stack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "DashBoard2",
        headerTintColor: "pink",
        headerStyle: {
          backgroundColor: "yellow",
        },
      },
    },
    Detail: Details,
    Profiles: Profile,
  },
});

const Navigation = createStaticNavigation(stack);

export default function () {
  return <Navigation />;
}
