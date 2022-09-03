import { CommonActions } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { GoToScreenTwoButton } from "../components/GoToScreenTwoButton";
import { ScreenOneProps } from "../navigation/ChildNavigatorOne.types";

export const ScreenOne = ({ navigation }: ScreenOneProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Screen One</Text>
      <GoToScreenTwoButton onPress={() => navigation.navigate("ScreenTwo")} />
      <Button
        title="Replace with second navigator"
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "ChildNavigatorTwo" }],
            })
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
