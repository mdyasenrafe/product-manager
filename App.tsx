import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import OwnText from "./src/components/Text/OwnText";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "./navigation";

export default function App() {
  const [loaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    DMSansMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DmSansBold: require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
