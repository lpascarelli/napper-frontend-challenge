import { StyleSheet, Pressable, Text } from 'react-native';

interface ButtonProps {
  variant: 'solid' | 'outline';
  title: string;
  onPress: () => void;
}

export default function Button({ title }: ButtonProps) {
  return (
    <Pressable onPress={() => {}} style={() => [styles.button, styles.solid]}>
      <Text style={styles['solid-text']}>{title}</Text>
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
});
