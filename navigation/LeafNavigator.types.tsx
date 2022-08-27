import { StackScreenProps } from "@react-navigation/stack";

export type LeafNavigatorStackParamList = {
  ScreenThree: undefined;
  ScreenFour: undefined;
};

export type ScreenThreeProps = StackScreenProps<
  LeafNavigatorStackParamList,
  "ScreenThree"
>;

export type ScreenFourProps = StackScreenProps<
  LeafNavigatorStackParamList,
  "ScreenFour"
>;
