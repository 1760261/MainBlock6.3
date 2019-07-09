import React, { Component } from 'react';
import { View, Image, Dimensions, Text, StyleSheet } from 'react-native';
import styles from '@Component/MiniScreen/styles';
import Video from 'react-native-video';
import { Icon } from 'native-base';

const TextScreen = ({ Title, Trip, Time, Kind }) => {
  return (
    <View
      style={{
        width: Dimensions.get('window').width * 0.55,
        height: Dimensions.get('window').width * 0.3,
      }}>
      <Text style={styles.Title}>{Title} </Text>
      <Text style={styles.Trip}>{Trip}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.Time}> {Kind}</Text>
        <Text style={styles.Trip}>{Time}</Text>
      </View>
    </View>
  );
};

// Later on in your styles..
var styless = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
const VideoScreen = () => {
  return (
    <View
      style={{
        width: Dimensions.get('window').width * 0.35,
        height: Dimensions.get('window').width * 0.3,
        // width: '100%',
        // height: '100%',
        marginLeft: 10,
      }} />
  );
};
export default class MiniScreen extends Component {
  render() {
    let SrW = Dimensions.get('window').width;
    let SrH = Dimensions.get('window').height;
    return (
      <View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            flex: 1,
            marginLeft: 10,
          }}>
          <View
            style={{
              flex: 4,
            }}>
            <VideoScreen />
          </View>
          <View
            style={{
              flex: 6,
            }}>
            <TextScreen
              Title={this.props.Title}
              Trip={this.props.Trip}
              Time={this.props.Time}
              Kind={this.props.Kind}
            />
          </View>
        </View>
        <View
          style={{
            height: 1,
            borderColor: '#E0E0E0',
            borderWidth: 1,
            margin: 20,
          }}
        />
      </View>
    );
  }
}
