import { View, PanResponder, Animated, Dimensions } from "react-native";
import React, { useState } from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const defaultProps = {
  onSwipeRight: () => {},
};

const Deck = ({ data, renderCard, onSwipeLeft, onSwipeRight = () => {} }) => {
  let position = new Animated.ValueXY();
  const [index, setIndex] = useState(0);

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });
    return { ...position.getLayout(), transform: [{ rotate: rotate }] };
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const onSwipeComplete = (direction) => {
    const item = data[index];
    direction === "right" ? onSwipeRight(item) : onSwipeLeft(item);
    position.setValue({ x: 0, y: 0 });
    setIndex(index + 1);
  };

  const forceSwipe = (direction) => {
    Animated.timing(position, {
      toValue: {
        x: direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH,
        y: 0,
      },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => {
      onSwipeComplete(direction);
    });
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > SWIPE_THRESHOLD) {
        forceSwipe("right");
      } else if (gesture.dx < -SWIPE_THRESHOLD) {
        forceSwipe("left");
      } else {
        resetPosition();
      }
    },
  });
  return (
    <View>
      {data?.map((item, index) => {
        if (index === 0) {
          return (
            <Animated.View
              key={index}
              style={getCardStyle()}
              {...panResponder.panHandlers}
            >
              {renderCard(item)}
            </Animated.View>
          );
        }
        return renderCard(item);
      })}
    </View>
  );
};

export default Deck;
