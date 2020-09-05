import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '../contexts/AuthContext';
import PropTypes from 'prop-types';   

const Login = (props) => { // props is needed for navigation
    const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
    console.log('Login', isLoggedIn);
  
    const getToken = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      console.log('token', userToken);
      if (userToken === 'abc') {
        setIsLoggedIn(true);
        navigation.navigate('Home');
      }
    };
    useEffect(() => {
      getToken();
    }, []);
    const logIn = async () => {
        setIsLoggedIn(true);
        await AsyncStorage.setItem('userToken', 'abc');
        navigation.navigate('Home');
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