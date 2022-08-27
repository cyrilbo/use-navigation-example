import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

export const GoToScreenTwoButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="go to Screen Two"
      onPress={() => {
        navigation.navigate("ChildNavigatorOne", { screen: "ScreenTwo" });
      }}
    />
  );
};
