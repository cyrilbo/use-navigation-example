import { NavigatorScreenParams } from "@react-navigation/native";
import { LeafNavigatorStackParamList } from "./LeafNavigator.types";

export type ChildNavigatorTwoStackParamList = {
  LeafNavigator: NavigatorScreenParams<LeafNavigatorStackParamList>;
};
