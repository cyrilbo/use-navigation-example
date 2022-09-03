import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { ScreenOneProps } from "../navigation/ChildNavigatorOne.types";

export const GoToScreenTwoButton = () => {
  const navigation = useNavigation<ScreenOneProps["navigation"]>();
  return (
    <Button
      title="go to Screen Two"
      onPress={() => {
        navigation.navigate("ScreenTwo");
      }}
    />
  );
};
