import { View, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  Easing,
} from 'react-native-reanimated';

import { xml as nap } from '@app/assets/nap';
import { xml as minus } from '@app/assets/minus';

interface ActivityProps {
  title: string;
  description: string;
  isSavingMode: boolean;
}

export default function Activity({
  title,
  description,
  isSavingMode,
}: ActivityProps) {
  const opacity = useSharedValue(1);
  const rotation = useSharedValue(0);
  const isShaking = useSharedValue(false);

  const animatedDeleteIcon = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 500 }),
    };
  });

  const animateContainer = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  opacity.value = isSavingMode ? 1 : 0;
  isShaking.value = isSavingMode ? false : true;

  if (isShaking.value) {
    rotation.value = withRepeat(
      withSequence(
        withTiming(-1.5, { duration: 100, easing: Easing.linear }),
        withTiming(1.5, { duration: 100, easing: Easing.linear })
      ),
      -1,
      true
    );
  } else {
    rotation.value = withTiming(0, {
      duration: 100,
      easing: Easing.linear,
    });
  }

  return (
    <Animated.View style={[styles.container, animateContainer]}>
      <Animated.View style={[styles.deleteIcon, animatedDeleteIcon]}>
        <SvgXml xml={minus} width={32} height={32} />
      </Animated.View>
      <SvgXml xml={nap} width={40} height={40} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 175,
    height: 109,
    backgroundColor: '#8F91FF1C',
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    gap: 1,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
  },
  description: {
    fontWeight: '400',
    fontSize: 14,
    color: '#7E7EA0',
  },
  deleteIcon: {
    position: 'absolute',
    top: -4.28,
    left: 147.28,
  },
});
