import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import OwnText from "./Text/OwnText";
import { colors } from "../../theme/colors";

export const HeaderComponent = ({ routes }: { routes: string }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flexDirection: "row", paddingLeft: 8 }}>
      {routes === "Home" ? (
        <View></View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.border_area}
        >
          <Text>
            <Entypo name="chevron-thin-left" size={22} color={colors.primary} />
          </Text>
        </TouchableOpacity>
      )}
      <View style={styles.up_area}>
        <OwnText preset="header">{routes}</OwnText>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  up_area: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlignVertical: "center",
    paddingVertical: 12,
  },
  border_area: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
});
