import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import OwnText from "../../components/Text/OwnText";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, InputPassword } from "../../components/Inputs";
import validator from "validator";
import { colors } from "../../../theme/colors";
import { Button } from "../../components/Buttons";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { ValidationEmail } from "../../../utils/ValidationEmail";
import { ValidationPassword } from "../../../utils/ValidationPassword";

export default function Login({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const emailRef = useRef<HTMLElement | undefined>();
  const passwordRef = useRef<HTMLElement | undefined>();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string | undefined>();
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string | undefined>(
    undefined
  );
  const [passwordEye, setPasswordEye] = useState<boolean>(false);

  return (
    <SafeAreaView>
      <ScrollView
        style={fileStyles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={fileStyles.heading_area}>
          <OwnText preset="h5" style={fileStyles.heading_text}>
            Hi There,
          </OwnText>
          <OwnText>Enter your Email and Password to login</OwnText>
        </View>
        <View>
          <Input
            label="Email"
            placeholder="Type your email"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(e) => {
              ValidationEmail(e as string, setEmail, setEmailError);
            }}
            refName={emailRef}
            onSubmitEditing={() => {
              passwordRef.current?.focus();
            }}
            returnKeyType="next"
          />
          {emailError && (
            <OwnText style={fileStyles.error}>{emailError}</OwnText>
          )}
          <InputPassword
            refName={passwordRef}
            label="Password"
            placeholder="type your password"
            passwordEye={passwordEye}
            setPasswordEye={setPasswordEye}
            onChangeText={(e) => {
              ValidationPassword(e as string, setPassword, setPasswordError);
            }}
            returnKeyType="done"
          />
          {passwordError && (
            <OwnText style={fileStyles.error}>{passwordError}</OwnText>
          )}
        </View>
        <Button title="Sign in" style={{ width: "100%" }} />

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <OwnText preset="p" style={fileStyles.dont_have_acc}>
            Don't have an account?{" "}
            <OwnText preset="h6" style={{ color: colors.primary }}>
              Sign up
            </OwnText>
          </OwnText>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const fileStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  heading_area: { marginVertical: 24 },
  heading_text: {
    marginBottom: 8,
  },
  error: {
    color: colors.red,
    marginBottom: 8,
  },
  dont_have_acc: {
    textAlign: "center",
    color: colors.gray,
    marginTop: 30,
  },
});
