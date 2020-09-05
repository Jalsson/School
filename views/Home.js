import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet,SafeAreaView,} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <List navigation={navigation} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};


Home.propTypes = {
  navigation: PropTypes.object,
};


export default Home;
