import { Button, StyleSheet, Text, View } from "react-native";
import { ScreenFourProps } from "../navigation/LeafNavigator.types";

export const ScreenFour = ({ navigation }: ScreenFourProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Screen Four</Text>
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
