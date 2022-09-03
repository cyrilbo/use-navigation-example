import { createStackNavigator } from "@react-navigation/stack";

import { ChildNavigatorOne } from "./ChildNavigatorOne";
import { ChildNavigatorTwo } from "./ChildNavigatorTwo";
import { RootNavigatorStackParamList } from "./RootNavigator.types";

const Stack = createStackNavigator<RootNavigatorStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChildNavigatorOne" component={ChildNavigatorOne} />
      <Stack.Screen name="ChildNavigatorTwo" component={ChildNavigatorTwo} />
    </Stack.Navigator>
  );
}
