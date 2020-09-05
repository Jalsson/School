import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';   

const Login = (props) => { // props is needed for navigation
    const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
    console.log('ili', isLoggedIn);
    const logIn = () => {
      setIsLoggedIn(true);
      if (isLoggedIn) {  // this is to make sure isLoggedIn has changed, will be removed later
        props.navigation.navigate('Home');
      }
    };
    return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Sign in!" onPress={logIn}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;