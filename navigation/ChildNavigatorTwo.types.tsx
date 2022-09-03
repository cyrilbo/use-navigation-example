import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { ChildNavigatorTwoProps } from "./RootNavigator.types";

export type ChildNavigatorTwoStackParamList = {
  ScreenThree: undefined;
  ScreenFour: undefined;
};

export type ScreenThreeProps = CompositeScreenProps<
  StackScreenProps<ChildNavigatorTwoStackParamList, "ScreenThree">,
  ChildNavigatorTwoProps
>;

export type ScreenFourProps = StackScreenProps<
  ChildNavigatorTwoStackParamList,
  "ScreenFour"
>;
