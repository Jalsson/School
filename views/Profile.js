import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
  console.log('profile', isLoggedIn);
  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    props.navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

export default Profile;