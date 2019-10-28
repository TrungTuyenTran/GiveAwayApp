import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View, Dimensions, TabBarIOS, Text } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/main/Home';
import LoginScreen from './components/auth/Login/Login';
import RegisterScreen from './components/auth/Register';
import ForgotPasswordScreen from './components/auth/ForgotPassword';
import DetailScreen from './components/main/Detail';
import ProfileScreen from './components/main/Profile'
import { createBottomTabNavigator } from 'react-navigation-tabs';

const AuthNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    ForgotPassword: ForgotPasswordScreen
  },
  {
    initialRouteName: 'Login',
  }
);

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const ProfileNavigator = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Profile',
  }
)

const TabNavigator = createBottomTabNavigator({
  Main: MainNavigator,
  User: ProfileNavigator,
});

const RootNavigator = createStackNavigator(
  {
    Auth: AuthNavigator,
    Tabbar: TabNavigator
  },
  {
    initialRouteName: 'Auth',
    mode: 'modal',
    headerMode: 'none'
  }
)

const AppContainer = createAppContainer(RootNavigator);


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  //   image: {
  //     position: 'absolute',
  //     width: '100%',
  //     height: '100%',
  //     resizeMode: 'cover'
  //   },
  //   gradient: {
  //     position: 'absolute',
  //     width: '100%',
  //     height: '100%',
  //     alignItems: 'center'
  //   },
  //   logoView: {
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     width: '100%',
  //     height: 300
  //   },
  //   icon_logo: {
  //     width: 150,
  //     height: 150,
  //     resizeMode: 'cover',
  //     marginTop: 50
  //   },
  //   text_logo: {
  //     width: 40 * 1726 / 378,
  //     height: 40,
  //     resizeMode: 'cover',
  //     marginTop: 10
  //   },
  //   login_button: {
  //     marginTop: 20,
  //     alignItems: 'center',
  //     backgroundColor: 'yellow',
  //     padding: 10,
  //     width: screenWidth - 40,
  //     height: 40,
  //     borderRadius: 10
  //   },
  //   forgot_password_button: {
  //     marginTop: 10,
  //     fontSize: 4
  //   }
});