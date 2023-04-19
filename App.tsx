import { useFonts } from "expo-font";
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
