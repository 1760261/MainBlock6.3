import React, { Component } from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import styles from '@Component/MiniScreen/styles';

import { Icon } from 'native-base';

const TextScreen = () => {
  return (
    <View
      style={{
        width: Dimensions.get('window').width * 0.55,
        height: Dimensions.get('window').width * 0.3,
      }}>
      <Text style={styles.Title}> Top 10 Yoga paths you could take to be stress free today</Text>
      <Text style={styles.Trip}>
        Lorem ipsum dolor sit amet, his last consectetur adipiscing elit...
      </Text>
    </View>
  );
};

const IMGScreen = () => {
  return (
    <View
      style={{
        width: Dimensions.get('window').width * 0.35,
        height: Dimensions.get('window').width * 0.3,
        // width: '100%',
        // height: '100%',
        marginLeft: 10,
      }}>
      <Image style={styles.LargIMG} source={require('@Asset/images/IMG2.png')} />
    </View>
  );
};
export default class MiniScreen extends Component {
  render() {
    let SrW = Dimensions.get('window').width;
    let SrH = Dimensions.get('window').height;
    return (
      <View style={{ backgroundColor: 'red', marginTop: SrW * 0.8, flexDirection: 'row', flex: 1 }}>
        <View
          style={{
            flex: 4,
            backgroundColor: 'red',
          }}>
          <IMGScreen />
        </View>
        <View
          style={{
            flex: 6,
            backgroundColor: 'black',
          }}>
          <TextScreen />
        </View>
      </View>
    );
  }
}
