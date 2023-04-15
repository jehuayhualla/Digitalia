import Card from "../Card";
import { Gesture, LongPressGestureHandler, State } from "react-native-gesture-handler";
import { CardProps } from "../Card/Card";
import { GestureDetector } from "react-native-gesture-handler";

interface LongTouchCardProps extends CardProps {
  onLongPress: () => void;
}

export default function LongTouchCard(props: LongTouchCardProps) {

  const longPressGestureHandler = Gesture.LongPress().onStart(() => {
    props.onLongPress();
  });

  return (
    <GestureDetector gesture={longPressGestureHandler} >
      <Card {...props} />
    </GestureDetector>
  );
}
