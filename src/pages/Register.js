import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Loader from 'react-native-modal-loader';
import firebase from 'react-native-firebase';

class Register extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    isLoading: false,
  };

  textInputHandler = field => text => {
    this.setState({[field]: text});
  };

  registerSubmitHandler = () => {
    if (
      this.state.email == '' ||
      this.state.password == '' ||
      this.state.confirmPassword == ''
    ) {
      Alert.alert('Invalid Input!', 'Please fill the field correctly');
    } else {
      if (this.state.password != this.state.confirmPassword) {
        Alert.alert(
          'Password is not same!',
          'Please make sure to re-enter your password',
        );
      } else {
        this.setState({isLoading: true});
        this.registerFormHandler();
      }
    }
  };

  registerFormHandler = async () => {
    const {email, password} = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.setState({isLoading: false});
      this.props.navigation.navigate('Login');
    } catch (error) {
      this.setState({isLoading: false});
      Alert.alert('Authentication Error', error.message);
    }
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#559fd6',
        }}>
        <ScrollView style={{paddingLeft: 24, paddingRight: 48}}>
          <View style={{marginTop: 48, alignItems: 'center'}}>
            <Icon
              name="account-badge-horizontal-outline"
              type="material-community"
              color="#fff"
              size={128}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 32,
                fontWeight: 'bold',
                fontFamily: 'monospace',
                marginTop: 12,
              }}>
              Register
            </Text>
          </View>

          <View
            style={{
              marginTop: 48,
              marginBottom: 12,
              position: 'relative',
              width: '100%',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 12,
                height: '100%',
                left: 15,
                opacity: 0.5,
                position: 'absolute',
                top: -10,
                width: '90%',
              }}></View>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 12,
                paddingHorizontal: 32,
                paddingVertical: 48,
              }}>
              <View
                style={{
                  borderWidth: 0.25,
                  borderRadius: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 12,
                  height: 48,
                  marginBottom: 12,
                }}>
                <Icon
                  name="envelope"
                  type="font-awesome"
                  color="#484848"
                  size={24}
                />
                <TextInput
                  style={{paddingHorizontal: 16, width: '100%'}}
                  placeholder="Email"
                  onChangeText={this.textInputHandler('email')}
                />
              </View>

              <View
                style={{
                  borderWidth: 0.25,
                  borderRadius: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 16,
                  height: 48,
                  marginBottom: 12,
                }}>
                <Icon
                  name="unlock-alt"
                  type="font-awesome"
                  color="#484848"
                  size={24}
                />
                <TextInput
                  style={{paddingHorizontal: 16, width: '100%'}}
                  secureTextEntry={true}
                  placeholder="Password"
                  onChangeText={this.textInputHandler('password')}
                />
              </View>

              <View
                style={{
                  borderWidth: 0.25,
                  borderRadius: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 12,
                  height: 48,
                  marginBottom: 12,
                }}>
                <Icon
                  name="check-square"
                  type="font-awesome"
                  color="#484848"
                  size={24}
                />
                <TextInput
                  style={{paddingHorizontal: 16, width: '100%'}}
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  onChangeText={this.textInputHandler('confirmPassword')}
                />
              </View>

              <Button
                buttonStyle={{
                  backgroundColor: '#3274a5',
                  borderColor: 'white',
                  borderRadius: 2,
                }}
                title="Register"
                onPress={this.registerSubmitHandler}
              />
            </View>
          </View>
        </ScrollView>
        <Loader loading={this.state.isLoading} color="#559fd6" />
      </SafeAreaView>
    );
  }
}

export default Register;
