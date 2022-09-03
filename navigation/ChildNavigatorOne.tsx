import { createStackNavigator } from "@react-navigation/stack";

import { ScreenOne } from "../screens/ScreenOne";
import { ScreenTwo } from "../screens/ScreenTwo";
import { ChildNavigatorOneStackParamList } from "./ChildNavigatorOne.types";

const Stack = createStackNavigator<ChildNavigatorOneStackParamList>();

export const ChildNavigatorOne = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScreenOne"
        component={ScreenOne}
        options={{ headerTitle: "Screen One" }}
      />
      <Stack.Screen
        name="ScreenTwo"
        component={ScreenTwo}
        options={{ headerTitle: "Screen2" }}
      />
    </Stack.Navigator>
  );
};
