import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
  console.log('profile', isLoggedIn);
  const logout = () => {
    setIsLoggedIn(false);
    if (!isLoggedIn) { // this is to make sure isLoggedIn has changed, will be removed later
      props.navigation.navigate('Login');
    }
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