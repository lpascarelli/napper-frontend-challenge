import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Log from './screen/Log/Index';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Log />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151329',
  },
});
