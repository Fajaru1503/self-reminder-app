import React from 'react';
import {
  SafeAreaView,
  TouchableNativeFeedback,
  Text,
  View,
  FlatList,
  Alert,
} from 'react-native';
import {Button, Card, Icon} from 'react-native-elements';
import Loader from 'react-native-modal-loader';
import firebase from 'react-native-firebase';
import dayjs from 'dayjs';

class Home extends React.Component {
  state = {
    activities: [],
    status: true,
  };

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

  componentDidMount = async () => {
    try {
      await firebase
        .firestore()
        .collection('activities')
        .get()
        .then(i => {
          this.setState({activities: i.docs.map(doc => doc.data())});
        });
      this.setState({status: false});
    } catch (error) {
      this.setState({status: false});
      Alert.alert('Error Get Data', error.message);
    }
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#559fd6',
          position: 'relative',
        }}>
        <FlatList
          style={{width: '100%'}}
          data={this.state.activities}
          renderItem={({item}) => (
            <TouchableNativeFeedback
              onPress={() =>
                console.log(new Date(item.date.seconds * 1000).toString())
              }>
              <Card
                containerStyle={{
                  borderRadius: 4,
                  backgroundColor: '#fafafa',
                }}
                wrapperStyle={{
                  flexDirection: 'row',
                  width: '100%',
                }}
                key={item.id}>
                <View
                  style={{
                    borderRightWidth: 2,
                    marginRight: 16,
                    paddingRight: 16,
                  }}>
                  <Icon name="calendar" type="font-awesome" size={48} />
                  <Text style={{marginTop: 6}}>
                    {dayjs(
                      new Date(item.date.toDate()).toLocaleDateString('en', {
                        weekday: null,
                      }),
                    ).format('DD/MM/YY')}
                  </Text>
                </View>
                <Text style={{fontSize: 24, textAlignVertical: 'center'}}>
                  {item.activity}
                </Text>
              </Card>
            </TouchableNativeFeedback>
          )}
        />
        <Button
          buttonStyle={{
            backgroundColor: '#3274a5',
            bottom: 12,
            left: 16,
            position: 'absolute',
            width: '90%',
          }}
          icon={{
            name: 'plus',
            type: 'font-awesome',
            size: 24,
            color: '#fff',
          }}
          onPress={() => this.props.navigation.navigate('Add')}
        />
        <Loader loading={this.state.status} color="#559fd6" />
      </SafeAreaView>
    );
  }
}

export default Home;
