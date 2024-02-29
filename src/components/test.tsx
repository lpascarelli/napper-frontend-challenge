import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

const AnimatedComponent = ({
  onFinishedHiding,
}: {
  onFinishedHiding: () => void;
}) => {
  // Shared value for opacity and translate Y for the animation
  const translateY = useSharedValue(-100); // Start above the view
  const opacity = useSharedValue(0);

  // Animated style to apply to the component
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  // Animate in when component mounts
  useEffect(() => {
    translateY.value = withTiming(0, { duration: 500 }); // Animate to view from top
    opacity.value = withTiming(1, { duration: 500 });
  }, []);

  // Animate out function
  const animateOut = () => {
    translateY.value = withTiming(-100, { duration: 500 }); // Move out of view upwards
    opacity.value = withTiming(0, { duration: 500 }, () => {
      runOnJS(onFinishedHiding)(); // Call the passed function when animation is done
    });
  };

  return (
    <Animated.View style={[styles.animatedComponent, animatedStyle]}>
      {/* Your component content here */}
      <Button title='Hide' onPress={animateOut} />
    </Animated.View>
  );
};

const Example = () => {
  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  const handleFinishedHiding = () => {
    setShowComponent(false);
  };

  return (
    <View style={styles.container}>
      {showComponent && (
        <AnimatedComponent onFinishedHiding={handleFinishedHiding} />
      )}
      <Button title='Toggle Component' onPress={toggleComponent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedComponent: {
    width: 200,
    height: 200,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default Example;
