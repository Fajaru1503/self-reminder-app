import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {Avatar, Button} from 'react-native-elements';

class Profile extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#559fd6',
        }}>
        <ScrollView style={{paddingHorizontal: 24, width: '100%'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 36,
            }}>
            <Avatar
              source={require('../assets/img/profile.jpg')}
              size={216}
              rounded
            />
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
                paddingVertical: 24,
              }}>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  marginBottom: 16,
                  paddingBottom: 16,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Username :
                </Text>
                <Text style={{fontSize: 18, marginTop: 6}}>Fajaru</Text>
              </View>

              <View>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Email :</Text>
                <Text style={{fontSize: 18, marginTop: 6}}>
                  fajarudewangga@gmail.com
                </Text>
              </View>

              <Button
                buttonStyle={{
                  backgroundColor: '#3274a5',
                  borderColor: 'white',
                  borderRadius: 2,
                  marginTop: 24,
                }}
                title="Edit Profile"
                onPress={() => this.props.navigation.navigate('EditProfile')}
              />

              <Button
                buttonStyle={{
                  backgroundColor: '#E74C3C',
                  borderColor: 'white',
                  borderRadius: 2,
                  marginTop: 24,
                }}
                title="Logout"
                onPress={() => this.props.navigation.navigate('Login')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Profile;
