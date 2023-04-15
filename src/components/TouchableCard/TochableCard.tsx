import Card from "../Card";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { CardProps } from "../Card/Card";

interface TouchableCardProps extends CardProps {
  onPress: () => void;
}

export default function TouchableCard(props: TouchableCardProps) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Card {...props} />
    </TouchableWithoutFeedback>
  );
}