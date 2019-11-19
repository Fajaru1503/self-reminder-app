import React from 'react';
import {SafeAreaView, View, Text, TextInput, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import Loader from 'react-native-modal-loader';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import firebase from 'react-native-firebase';

class Add extends React.Component {
  state = {
    activities: [],
    activity: '',
    date: new Date(),
    show: false,
    isDateFill: false,
    isTimeFill: false,
    mode: '',
    loadingStatus: false,
  };

  inputActivityHandler = field => text => {
    const trimmedText = text.trim();
    this.setState({[field]: trimmedText});
  };

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  show = (mode, field) => {
    this.setState({
      show: true,
      [field]: true,
      mode,
    });
  };

  datepicker = () => {
    this.show('date', 'isDateFill');
  };

  timepicker = () => {
    this.show('time', 'isTimeFill');
  };

  addButtonHandler = async () => {
    this.setState({loadingStatus: true});
    try {
      if (
        this.state.activity != '' &&
        this.state.isDateFill &&
        this.state.isTimeFill
      ) {
        await firebase
          .firestore()
          .collection('activities')
          .add({
            activity: this.state.activity,
            date: firebase.firestore.Timestamp.fromDate(this.state.date),
            id: this.state.activities.length + 1 + '',
            status: false,
          });
        this.setState({loadingStatus: false});
        this.props.navigation.navigate('Home');
      } else {
        Alert.alert(
          'Error Submit New Activity',
          'Please Fill the Fields Properly',
        );
      }
    } catch (err) {
      this.setState({loadingStatus: false});
      Alert.alert('Error Get Data', error.message);
    }
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
          padding: 32,
        }}>
        <View style={{marginBottom: 32}}>
          <Text style={{color: '#fafafa', fontSize: 24, fontWeight: 'bold'}}>
            Activity :
          </Text>
          <TextInput
            placeholder="Input your activity here..."
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#fafafa',
              fontSize: 16,
              paddingLeft: 12,
            }}
            onChangeText={this.inputActivityHandler('activity')}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginBottom: 32, width: 120}}>
            <Text style={{color: '#fafafa', fontSize: 24, fontWeight: 'bold'}}>
              Date :
            </Text>
            <Text
              style={{
                borderBottomColor: '#fafafa',
                borderBottomWidth: 1,
                paddingVertical: 16,
                paddingLeft: 12,
                fontSize: 16,
              }}
              onPress={this.datepicker}>
              {this.state.isDateFill
                ? dayjs(
                    this.state.date.toLocaleDateString('en', {weekday: null}),
                  ).format('DD MMM YYYY')
                : ''}
            </Text>
          </View>
          <View style={{marginBottom: 32, marginLeft: 48, width: 120}}>
            <Text style={{color: '#fafafa', fontSize: 24, fontWeight: 'bold'}}>
              Time :
            </Text>
            <Text
              style={{
                borderBottomColor: '#fafafa',
                borderBottomWidth: 1,
                paddingVertical: 16,
                paddingLeft: 12,
                fontSize: 16,
              }}
              onPress={this.timepicker}>
              {this.state.isTimeFill
                ? this.state.date
                    .toLocaleTimeString()
                    .match(/\d{2}:\d{2}|[AMP]+/g)
                    .join(' ')
                : ''}
            </Text>
          </View>
        </View>

        <Button
          buttonStyle={{
            backgroundColor: '#3274a5',
          }}
          title="Add"
          onPress={
            // () => console.log(new Date(this.state.date).getTime() / 1000)
            this.addButtonHandler
          }
        />

        {/* Showing Date & Time Picker */}
        <View>
          {this.state.show && (
            <DateTimePicker
              value={this.state.date}
              mode={this.state.mode}
              is24Hour={true}
              display="default"
              onChange={this.setDate}
            />
          )}
        </View>

        <Loader loading={this.state.loadingStatus} color="#559fd6" />
      </SafeAreaView>
    );
  }
}

export default Add;
