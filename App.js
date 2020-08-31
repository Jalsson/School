import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView,} from 'react-native';
import List from './components/List'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <List />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 10
  },
 });

export default App;