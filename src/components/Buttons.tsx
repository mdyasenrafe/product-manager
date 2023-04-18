import React from "react";
import {
  Image,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../theme/colors";
import OwnText from "./Text/OwnText";

interface buttonProps {
  title: string;
  style?: TextStyle;
  onPress?: () => void;
  colour?: string;
  disable?: boolean;
}

export function Button(props: buttonProps) {
  const { title, style: customStyle, onPress, colour: color, disable } = props;
  return (
    <TouchableOpacity
      style={[styles.button, styles.normalButton, customStyle]}
      onPress={onPress}
      disabled={disable}
    >
      <OwnText preset="h6" style={{ color: color || colors.white }}>
        {title}
      </OwnText>
    </TouchableOpacity>
  );
}

export function IconButton(props: buttonProps) {
  const { title, style: customStyle, onPress, colour: color, disable } = props;
  return (
    <TouchableOpacity
      style={[styles.normalButton, styles.IconButton, customStyle]}
      onPress={onPress}
      disabled={disable}
    >
      {/* <Image
        source={require("../../assets/images/google.jpg")}
        style={{ width: 25, height: 25 }}
      /> */}
      <OwnText
        preset="p"
        style={{ color: color || colors.black, marginLeft: 8 }}
      >
        {title}
      </OwnText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  normalButton: {
    width: 165,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  IconButton: {
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 16,
  },
});
