import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import OwnText from "../../components/Text/Own.Text";

export default function Welcome() {
  return (
    <SafeAreaView>
      <ScrollView>
        <OwnText preset="h1">Onboarding</OwnText>
      </ScrollView>
    </SafeAreaView>
  );
}
