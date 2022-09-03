import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScreenTwoProps } from "../navigation/ChildNavigatorOne.types";

export const ScreenTwo = () => {
  const navigation = useNavigation<ScreenTwoProps["navigation"]>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Screen Two</Text>
      <Button
        title="go back"
        onPress={() => {
          navigation.goBack();
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
