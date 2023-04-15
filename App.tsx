/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import RootNav from './src/navigation/RootNav';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <RootNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
