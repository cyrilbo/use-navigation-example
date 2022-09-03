import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { ChildNavigatorTwoProps } from "./RootNavigator.types";

export type LeafNavigatorStackParamList = {
  ScreenThree: undefined;
  ScreenFour: undefined;
};

export type ScreenThreeProps = CompositeScreenProps<
  StackScreenProps<LeafNavigatorStackParamList, "ScreenThree">,
  ChildNavigatorTwoProps
>;

export type ScreenFourProps = StackScreenProps<
  LeafNavigatorStackParamList,
  "ScreenFour"
>;
