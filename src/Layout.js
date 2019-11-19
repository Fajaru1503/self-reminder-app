import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Add from './pages/Add';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

const Layouts = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
        headerTitleStyle: {fontWeight: 'bold', marginLeft: -6},
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        title: 'Register',
        headerTitleStyle: {fontWeight: 'bold', marginLeft: -6},
      },
    },
    Home: {
      screen: Home,
    },
    Add: {
      screen: Add,
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        headerTitleStyle: {fontWeight: 'bold', marginLeft: -6},
      },
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        title: 'Edit Profile',
        headerTitleStyle: {fontWeight: 'bold', marginLeft: -6},
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(Layouts);
