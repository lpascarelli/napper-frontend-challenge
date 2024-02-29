import { View, Button } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

const IOSLikeShakeView = () => {
  // Rotation value for the shake effect
  const rotation = useSharedValue(0);

  // Tracks if the shake animation is active
  const isShaking = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  const toggleShake = () => {
    isShaking.value = !isShaking.value; // Toggle the shaking state

    if (isShaking.value) {
      // Start rotating slightly from left to right
      rotation.value = withRepeat(
        withSequence(
          withTiming(-2, { duration: 100, easing: Easing.linear }), // Rotate left
          withTiming(2, { duration: 100, easing: Easing.linear }) // Rotate right
        ),
        -1, // Repeat indefinitely
        true // Reverse the animation on each iteration
      );
    } else {
      // Stop shaking and return to initial rotation
      rotation.value = withTiming(0, { duration: 100, easing: Easing.linear });
    }
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={[
          { width: 100, height: 100, backgroundColor: 'tomato' },
          animatedStyle,
        ]}
      />
      <Button title='Toggle Shake' onPress={toggleShake} />
    </View>
  );
};

export default IOSLikeShakeView;
