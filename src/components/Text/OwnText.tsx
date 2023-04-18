import { Text, StyleSheet } from "react-native";
import React from "react";
import { TextPresets, presets } from "../../../theme/text.preset";

interface TextPropsType {
  children: React.ReactNode;
  preset?: TextPresets;
  style?: any;
}

export default function OwnText(props: TextPropsType) {
  const { children, preset = "default", style } = props;
  const styles = StyleSheet.compose(style, presets[preset]);
  return <Text style={styles}>{children}</Text>;
}
