import { StyleSheet, TextInput, TextStyle, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import OwnText from "./Text/OwnText";
import { colors } from "../../theme/colors";
import { Typography } from "../../theme/typography";

interface TextInputProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "visible-password";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  style?: TextStyle | any;
  value?: string;
  editable?: boolean;
  label?: string;
  maxLength?: number;
  optional?: boolean;
  refName?: any;
  onSubmitEditing?: () => void;
  returnKeyType?:
    | "done"
    | "go"
    | "next"
    | "search"
    | "send"
    | "none"
    | "previous";
}
interface LabelProps {
  label?: string;
  style?: TextStyle;
  optional?: boolean;
}
function LabelArea(props: LabelProps) {
  const { label, optional } = props;
  return (
    <OwnText preset="h6" style={{ marginBottom: 8 }}>
      {label}
    </OwnText>
  );
}

export function Input(props: TextInputProps) {
  const {
    placeholder,
    autoCapitalize,
    onChangeText,
    keyboardType,
    style,
    value,
    editable,
    label,
    maxLength,
    optional,
    refName,
    onSubmitEditing,
    returnKeyType,
  } = props;

  return (
    <>
      {props.label && <LabelArea label={label} optional={optional} />}
      <TextInput
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        style={[styles.input, style]}
        placeholder={placeholder}
        placeholderTextColor="black"
        defaultValue={value}
        editable={editable}
        maxLength={maxLength}
        returnKeyType={returnKeyType}
        enablesReturnKeyAutomatically={true}
        ref={refName}
        onSubmitEditing={onSubmitEditing}
      />
    </>
  );
}

interface PasswordInputProps {
  onChangeText?: (text: string) => void;
  passwordEye?: boolean;
  setPasswordEye?: any;
  placeholder: string;
  label?: string;
  refName?: any;
  onSubmitEditing?: () => void;
  returnKeyType?:
    | "done"
    | "go"
    | "next"
    | "search"
    | "send"
    | "none"
    | "previous";
}

export function InputPassword(props: PasswordInputProps) {
  const {
    onChangeText,
    passwordEye,
    setPasswordEye: setPasswordEye,
    placeholder,
    label,
    refName,
    onSubmitEditing,
    returnKeyType,
  } = props;
  return (
    <>
      {label && <LabelArea label={label} />}
      <View style={styles.password_area}>
        <TextInput
          autoCapitalize={"none"}
          style={{ width: "90%" }}
          placeholder={placeholder}
          secureTextEntry={!passwordEye}
          onChangeText={onChangeText}
          placeholderTextColor="black"
          returnKeyType={returnKeyType}
          enablesReturnKeyAutomatically={true}
          ref={refName}
          onSubmitEditing={onSubmitEditing}
        />
        {passwordEye ? (
          <Feather
            onPress={() => setPasswordEye(false)}
            name="eye"
            size={24}
            color="black"
          />
        ) : (
          <Feather
            onPress={() => setPasswordEye(true)}
            name="eye-off"
            size={24}
            color="black"
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.borderColor,
    height: 48,
    marginBottom: 16,
    fontFamily: Typography.regular,
    borderRadius: 8,
    padding: 8,
  },
  password_area: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderWidth: 1,
    height: 48,
    borderColor: colors.borderColor,
    fontFamily: Typography.regular,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
});
