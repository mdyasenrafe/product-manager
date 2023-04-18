import { View, StyleSheet, Image } from "react-native";
import React from "react";
import OwnText from "../../components/Text/OwnText";
import { Button } from "../../components/Buttons";
import deadline from "../../../assets/images/deadline.png";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

export default function Welcome({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  return (
    <View style={fileStyles.container}>
      <View style={fileStyles.upPart}>
        <Image source={deadline} style={fileStyles.deadline} />
      </View>
      <View style={fileStyles.bottomPart}>
        <OwnText preset="h3" style={{ textAlign: "center" }}>
          Everything you can do in the app
        </OwnText>
        <OwnText preset="small" style={fileStyles.description}>
          {/* product management website description */}
          Welcome to our ProManage app! Manage tasks, deadlines, and teams with
          ease. Collaborate in real-time and streamline your workflow
        </OwnText>
        <Button
          title="Get Started"
          style={fileStyles.btn}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}

const fileStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upPart: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flex: 2,
  },
  deadline: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    resizeMode: "cover",
  },
  bottomPart: {
    flex: 2,
    marginHorizontal: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  description: { textAlign: "center", marginTop: 8 },
  btn: { width: "100%", marginTop: 18 },
});
