import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { ChildNavigatorOneStackParamList } from "./ChildNavigatorOne.types";
import { ChildNavigatorTwoStackParamList } from "./ChildNavigatorTwo.types";

export type RootNavigatorStackParamList = {
  ChildNavigatorOne: NavigatorScreenParams<ChildNavigatorOneStackParamList>;
  ChildNavigatorTwo: NavigatorScreenParams<ChildNavigatorTwoStackParamList>;
};

export type ChildNavigatorOneProps = StackScreenProps<
  RootNavigatorStackParamList,
  "ChildNavigatorOne"
>;

export type ChildNavigatorTwoProps = StackScreenProps<
  RootNavigatorStackParamList,
  "ChildNavigatorTwo"
>;
