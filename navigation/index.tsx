import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import { Typography } from "../theme/typography";
import Home from "../view/screens/Home";
import Notifications from "../view/screens/Notifications";
import Welcome from "../view/screens/onboarding/Welcome";
import Login from "../view/screens/onboarding/Login";
import Signup from "../view/screens/onboarding/Signup";
const Tab: any = createBottomTabNavigator();

const TabBarIcon = ({
  fontFamily,
  name,
  color,
}: {
  fontFamily?: string;
  name?: any;
  color?: string;
}): any => {
  if (fontFamily === "Ionicons") {
    return <Ionicons name="home" size={24} color={color} />;
  } else if (fontFamily === "Feather") {
    return <Feather name={name} size={24} color={color} />;
  } else if ((fontFamily = "FontAwesome")) {
    return <FontAwesome name={name} size={24} color={color} />;
  }
};

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.black,
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: Typography.regular,
        },
        tabBarStyle: { height: 60 },
      }}
    >
      <Tab.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ color }: any) => (
            <TabBarIcon fontFamily="Ionicons" name={"home"} color={color} />
          ),
        }}
        name="HomeTab"
        component={Home}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export function Navigation() {
  let user: boolean = true;

  const AppTheme: any = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
    },
  };

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        ) : (
          <>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
