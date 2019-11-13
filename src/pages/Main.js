import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';

class Main extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#559fd6',
          padding: 24,
        }}>
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
            Self Reminder
          </Text>
          <Text
            style={{
              color: '#fff',
            }}>
            Your Personal Reminder
          </Text>
        </View>

        <View style={{position: 'relative', width: '100%'}}>
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
              paddingHorizontal: 72,
              paddingVertical: 64,
            }}>
            <Button
              title="Login"
              buttonStyle={{
                backgroundColor: '#3274a5',
                borderRadius: 2,
              }}
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <Button
              title="Sign Up"
              buttonStyle={{
                backgroundColor: '#3274a5',
                borderRadius: 2,
                marginTop: 12,
              }}
              onPress={() => this.props.navigation.navigate('Register')}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Main;
