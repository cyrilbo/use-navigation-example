import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { ChildNavigatorOneProps } from "./RootNavigator.types";

export type ChildNavigatorOneStackParamList = {
  ScreenOne: undefined;
  ScreenTwo: undefined;
};

export type ScreenOneProps = CompositeScreenProps<
  StackScreenProps<ChildNavigatorOneStackParamList, "ScreenOne">,
  ChildNavigatorOneProps
>;

export type ScreenTwoProps = StackScreenProps<
  ChildNavigatorOneStackParamList,
  "ScreenTwo"
>;
