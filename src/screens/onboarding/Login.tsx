import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import OwnText from "../../components/Text/Own.Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function Login() {
  const insets = useSafeAreaInsets();
  const statusBarHeight = insets.top;
  return (
    <SafeAreaView>
      <ScrollView style={fileStyles.container}>
        <OwnText preset="h1">Login</OwnText>
      </ScrollView>
    </SafeAreaView>
  );
}

const fileStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    // backgroundColor: "#F3F3F3",
  },
});
