import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableNativeFeedback,
  Text,
  View,
} from 'react-native';
import {Card, Icon} from 'react-native-elements';

class Home extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Fajaru',
      headerTitleStyle: {
        flex: 1,
        fontWeight: 'bold',
        marginRight: -6,
        textAlign: 'right',
      },
      headerLeft: null,
      headerRight: () => (
        <Icon
          name="user-circle"
          type="font-awesome"
          iconStyle={{marginRight: 16}}
          onPress={() => navigation.navigate('Profile')}
        />
      ),
    };
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#559fd6',
        }}>
        <ScrollView style={{width: '100%'}}>
          <TouchableNativeFeedback>
            <Card
              containerStyle={{
                borderRadius: 4,
                backgroundColor: '#fafafa',
              }}
              wrapperStyle={{
                flexDirection: 'row',
                width: '100%',
              }}>
              <View
                style={{
                  borderRightWidth: 2,
                  marginRight: 16,
                  paddingRight: 16,
                }}>
                <Icon name="calendar" type="font-awesome" size={48} />
                <Text style={{marginTop: 6}}>30-08-19</Text>
              </View>
              <Text style={{fontSize: 24, textAlignVertical: 'center'}}>
                4 Activities
              </Text>
            </Card>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <Card
              containerStyle={{
                borderRadius: 4,
                backgroundColor: '#fafafa',
              }}
              wrapperStyle={{
                flexDirection: 'row',
                width: '100%',
              }}>
              <View
                style={{
                  borderRightWidth: 2,
                  marginRight: 16,
                  paddingRight: 16,
                }}>
                <Icon name="calendar" type="font-awesome" size={48} />
                <Text style={{marginTop: 6}}>30-08-19</Text>
              </View>
              <Text style={{fontSize: 24, textAlignVertical: 'center'}}>
                4 Activities
              </Text>
            </Card>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <Card
              containerStyle={{
                borderRadius: 4,
                backgroundColor: '#fafafa',
              }}
              wrapperStyle={{
                flexDirection: 'row',
                width: '100%',
              }}>
              <View
                style={{
                  borderRightWidth: 2,
                  marginRight: 16,
                  paddingRight: 16,
                }}>
                <Icon name="calendar" type="font-awesome" size={48} />
                <Text style={{marginTop: 6}}>30-08-19</Text>
              </View>
              <Text style={{fontSize: 24, textAlignVertical: 'center'}}>
                4 Activities
              </Text>
            </Card>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <Card
              containerStyle={{
                borderRadius: 4,
                backgroundColor: '#fafafa',
              }}
              wrapperStyle={{
                flexDirection: 'row',
                width: '100%',
              }}>
              <View
                style={{
                  borderRightWidth: 2,
                  marginRight: 16,
                  paddingRight: 16,
                }}>
                <Icon name="calendar" type="font-awesome" size={48} />
                <Text style={{marginTop: 6}}>30-08-19</Text>
              </View>
              <Text style={{fontSize: 24, textAlignVertical: 'center'}}>
                4 Activities
              </Text>
            </Card>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <Card
              containerStyle={{
                borderRadius: 4,
                backgroundColor: '#fafafa',
              }}
              wrapperStyle={{
                flexDirection: 'row',
                width: '100%',
              }}>
              <View
                style={{
                  borderRightWidth: 2,
                  marginRight: 16,
                  paddingRight: 16,
                }}>
                <Icon name="calendar" type="font-awesome" size={48} />
                <Text style={{marginTop: 6}}>30-08-19</Text>
              </View>
              <Text style={{fontSize: 24, textAlignVertical: 'center'}}>
                4 Activities
              </Text>
            </Card>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <Card
              containerStyle={{
                borderRadius: 4,
                backgroundColor: '#fafafa',
              }}
              wrapperStyle={{
                flexDirection: 'row',
                width: '100%',
              }}>
              <View
                style={{
                  borderRightWidth: 2,
                  marginRight: 16,
                  paddingRight: 16,
                }}>
                <Icon name="calendar" type="font-awesome" size={48} />
                <Text style={{marginTop: 6}}>30-08-19</Text>
              </View>
              <Text style={{fontSize: 24, textAlignVertical: 'center'}}>
                4 Activities
              </Text>
            </Card>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback>
            <Card
              containerStyle={{
                borderRadius: 4,
                backgroundColor: '#fafafa',
                marginBottom: 16,
              }}
              wrapperStyle={{
                flexDirection: 'row',
                width: '100%',
              }}>
              <View
                style={{
                  borderRightWidth: 2,
                  marginRight: 16,
                  paddingRight: 16,
                }}>
                <Icon name="calendar" type="font-awesome" size={48} />
                <Text style={{marginTop: 6}}>30-08-19</Text>
              </View>
              <Text style={{fontSize: 24, textAlignVertical: 'center'}}>
                4 Activities
              </Text>
            </Card>
          </TouchableNativeFeedback>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;
