import { StyleSheet, Pressable, Text } from 'react-native';

import { ButtonVariant } from '@app/types';

interface ButtonProps {
  variant: ButtonVariant;
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress, variant }: ButtonProps) {
  const variantStyling =
    variant === 'solid'
      ? {
          ...styles.solid,
        }
      : {
          ...styles.outline,
        };
  const textStyling =
    variant === 'solid' ? styles['solid-text'] : styles['outline-text'];

  return (
    <Pressable onPress={onPress} style={[styles.button, variantStyling]}>
      <Text style={textStyling}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 38,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 40,
  },
  solid: {
    width: 69,
    backgroundColor: '#7577F3',
  },
  'solid-text': {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  outline: {
    width: 62,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  'outline-text': {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
  },
});
