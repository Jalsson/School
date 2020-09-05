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
import {checkToken} from '../hooks/APIhooks';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = (props) => { // props is needed for navigation
    const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
    console.log('Login', isLoggedIn);
  
    const getToken = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      console.log('token', userToken);
      if (userToken) {
        try {
          const userData = await checkToken(userToken);
          console.log('token valid', userData);
          setIsLoggedIn(true);
          setUser(userData);
        } catch (e) {
          console.log('token check failed', e.message);
        }
        // navigation.navigate('Home');
      }
    };
    useEffect(() => {
      getToken();
    }, []);

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <LoginForm navigation={navigation} />
      <RegisterForm navigation={navigation} />
    </View>
  );
}

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