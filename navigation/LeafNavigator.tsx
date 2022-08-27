import { createStackNavigator } from "@react-navigation/stack";
import { ScreenFour } from "../screens/ScreenFour";
import { ScreenThree } from "../screens/ScreenThree";
import { LeafNavigatorStackParamList } from "./LeafNavigator.types";

const Stack = createStackNavigator<LeafNavigatorStackParamList>();

export const LeafNavigator = () => {
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
