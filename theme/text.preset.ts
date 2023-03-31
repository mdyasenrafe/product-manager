import { TextStyle } from "react-native";
import { Typography } from "./typography";

const Base: TextStyle = {
  fontFamily: Typography.regular,
  fontSize: 16,
};

const Medium: TextStyle = {
  fontFamily: Typography.medium,
};

const Bold: TextStyle = {
  fontFamily: Typography.bold,
};

export const presets = {
  default: Base,
  bold: Bold,
  medium: Medium,
  h1: {
    ...Bold,
    fontSize: 48,
  },
  h2: {
    ...Bold,
    fontSize: 40,
  },
  h3: {
    ...Bold,
    fontSize: 36,
  },
  h4: {
    ...Bold,
    fontSize: 30,
  },
  h5: {
    ...Bold,
    fontSize: 26,
  },
  h6: {
    ...Medium,
    fontSize: 20,
  },
  header: {
    ...Medium,
    fontSize: 22,
  },
  p: {
    ...Medium,
    fontSize: 18,
  },
  p_base: {
    ...Base,
    fontSize: 18,
  },
  small: {
    ...Base,
    fontSize: 14,
  },
};

export type TextPresets = keyof typeof presets;
