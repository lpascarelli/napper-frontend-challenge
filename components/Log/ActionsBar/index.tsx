import { StyleSheet, View, Text } from 'react-native';

import Button from '../../UI/Button';

export default function ActionsBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Track</Text>
      <Button variant='solid' onPress={() => {}} title='Save' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 74,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    color: '#C1C1EA',
  },
});
