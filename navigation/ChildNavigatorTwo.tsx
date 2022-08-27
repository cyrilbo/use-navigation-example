import { createStackNavigator } from "@react-navigation/stack";

import { ChildNavigatorTwoStackParamList } from "./ChildNavigatorTwo.types";
import { LeafNavigator } from "./LeafNavigator";

const Stack = createStackNavigator<ChildNavigatorTwoStackParamList>();

export const ChildNavigatorTwo = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="LeafNavigator"
        component={LeafNavigator}
        options={{ headerTitle: "Leaf Navigator" }}
      />
    </Stack.Navigator>
  );
};
