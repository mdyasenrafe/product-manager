import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface ColorsType {
  primary: string;
  black: string;
  white: string;
  borderBlackColor: string;
  borderColor: string;
  gray: string;
  red: string;
}
interface TypographyType {
  regular?: string;
  medium?: string;
  bold?: string;
}
interface NavigationType {
  navigation: NavigationProp<ParamListBase>;
}
