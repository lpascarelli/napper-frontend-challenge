import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const OpacityExample = () => {
  // This shared value will hold the opacity value.
  const opacity = useSharedValue(1);

  // Function to trigger the animation.
  const handlePress = () => {
    // This will animate the opacity to 0 over 500 milliseconds.
    opacity.value = withTiming(0, { duration: 500 });
  };

  // Animated styles that depend on the shared value.
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      {/* Animated View */}
      <Animated.View style={[styles.box, animatedStyles]} />

      {/* Button to trigger the animation */}
      <Button title='Fade Out' onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    marginBottom: 20,
  },
});

export default OpacityExample;
