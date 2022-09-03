import { createStackNavigator } from "@react-navigation/stack";
import { ScreenFour } from "../screens/ScreenFour";

import { ScreenThree } from "../screens/ScreenThree";
import { ChildNavigatorTwoStackParamList } from "./ChildNavigatorTwo.types";

const Stack = createStackNavigator<ChildNavigatorTwoStackParamList>();

export const ChildNavigatorTwo = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScreenThree"
        component={ScreenThree}
        options={{ headerTitle: "Screen Three" }}
      />
      <Stack.Screen
        name="ScreenFour"
        component={ScreenFour}
        options={{ headerTitle: "Screen Four" }}
      />
    </Stack.Navigator>
  );
};
