import { StyleSheet, View } from 'react-native';

import ActionsBar from '../../components/Log/ActionsBar';

export default function Log() {
  return (
    <View style={styles.container}>
      <ActionsBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
