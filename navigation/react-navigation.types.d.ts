import { RootNavigatorStackParamList } from "./RootNavigator.types";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigatorStackParamList {}
  }
}
