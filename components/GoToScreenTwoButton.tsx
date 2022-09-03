import { Button } from "react-native";

interface Props {
  onPress: () => void;
}

export const GoToScreenTwoButton = ({ onPress }: Props) => {
  return <Button title="go to Screen Two" onPress={onPress} />;
};
