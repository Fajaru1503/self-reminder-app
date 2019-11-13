import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
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
              showEditButton
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
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Username :
                </Text>
                <TextInput style={{width: '100%'}} value="Fajaru" />
              </View>

              <View>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Email :</Text>
                <TextInput
                  style={{width: '100%'}}
                  value="fajarudewangga@gmail.com"
                />
              </View>

              <Button
                buttonStyle={{
                  backgroundColor: '#16a085',
                  borderColor: 'white',
                  borderRadius: 2,
                  marginTop: 24,
                }}
                title="Save"
                onPress={() => this.props.navigation.navigate('Profile')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Profile;
