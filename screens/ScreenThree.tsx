import { CommonActions, useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScreenThreeProps } from "../navigation/ChildNavigatorTwo.types";

export const ScreenThree = () => {
  const navigation = useNavigation<ScreenThreeProps["navigation"]>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Screen Three</Text>
      <Button
        title="go to Screen Four"
        onPress={() => {
          navigation.navigate("ScreenFour");
        }}
      />
      <Button
        title="Replace with first navigator"
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "ChildNavigatorOne" }],
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
