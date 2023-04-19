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
import { ValidationName } from "../../../utils/ValidationName";
import { ValidationConfrimPas } from "../../../utils/ValidationConfirmPas";

export default function Signup({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const nameRef = useRef<HTMLElement | undefined>();
  const emailRef = useRef<HTMLElement | undefined>();
  const passwordRef = useRef<HTMLElement | undefined>();
  const confirmPasRef = useRef<HTMLElement | undefined>();

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [passwordEye, setPasswordEye] = useState<boolean>(false);
  const [confirmPasEye, setConfirmPasEye] = useState<boolean>(false);

  const [nameError, setNameError] = useState<string | undefined>();
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const [confirmPasError, setConfirmPasError] = useState<string | undefined>();
  return (
    <SafeAreaView>
      <ScrollView
        style={fileStyles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={fileStyles.heading_area}>
          <OwnText preset="h5">Let's make you member of</OwnText>
        </View>
        <View>
          <Input
            refName={nameRef}
            label="Name"
            placeholder="Type your full name"
            autoCapitalize="words"
            keyboardType="default"
            onChangeText={(e) => {
              ValidationName(e, setName, setNameError);
            }}
            onSubmitEditing={() => emailRef.current?.focus()}
            returnKeyType="next"
          />
          {nameError && (
            <OwnText style={fileStyles.error}>{emailError}</OwnText>
          )}
          <Input
            label="Email"
            placeholder="Type your email"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(e) => {
              ValidationEmail(e, setEmail, setEmailError);
            }}
            returnKeyType="next"
            refName={emailRef}
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          {emailError && (
            <OwnText style={fileStyles.error}>{emailError}</OwnText>
          )}
          <InputPassword
            refName={passwordRef}
            onSubmitEditing={() => confirmPasRef.current?.focus()}
            label="Password"
            placeholder="type your password"
            passwordEye={passwordEye}
            setPasswordEye={setPasswordEye}
            onChangeText={(e) => {
              ValidationPassword(e as string, setPassword, setPasswordError);
            }}
            returnKeyType="next"
          />
          {passwordError && (
            <OwnText style={fileStyles.error}>{passwordError}</OwnText>
          )}
          <InputPassword
            refName={confirmPasRef}
            label="Confirm Password"
            placeholder="type your password"
            passwordEye={confirmPasEye}
            setPasswordEye={setConfirmPasEye}
            onChangeText={(e) => {
              ValidationConfrimPas(
                e,
                password,
                setConfirmPassword,
                setConfirmPasError
              );
            }}
            returnKeyType="done"
          />
          {confirmPasError && (
            <OwnText style={fileStyles.error}>{confirmPasError}</OwnText>
          )}
        </View>
        <Button title="Sign in" style={{ width: "100%" }} />

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <OwnText preset="p" style={fileStyles.dont_have_acc}>
            Already have an account?{" "}
            <OwnText preset="h6" style={{ color: colors.primary }}>
              Log in
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
