import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView, Image} from 'react-native';
import List from './components/List'
import {kitten} from './src/images/kitten.jpg'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
      style={styles.headerImage}
        source={{uri: "https://i.pinimg.com/564x/2e/a2/b7/2ea2b7dfb2ce116266209ccad18e9d7a.jpg"}}
      />
      <Text
      style={styles.messageText}
  >{"Over 9000 homeless cats"}</Text>
      <List />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  messageText:{
    position: "absolute",
    top: 60,
    backgroundColor: "lightblue",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    width: "45%",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5
  },
  headerImage:{
    height: 150
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 25
  },
});

export default App;