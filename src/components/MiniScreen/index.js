import React, { Component } from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import styles from '@Component/MiniScreen/styles';

import { Icon } from 'native-base';

const TextScreen = ({ Title, Trip, Time, Kind }) => {
  return (
    <View
      style={{
        flex: 1,
        marginLeft: 10,
        marginRight: 30,
      }}>
      <View
        style={{
          flex: 5,
        }}>
        <Text style={styles.Title}>{Title} </Text>
      </View>
      <View
        style={{
          flex: 4,
        }}>
        <Text style={styles.Trip}>{Trip}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.Kind}> {Kind}</Text>
        <Text style={styles.Trip}>{Time}</Text>
      </View>
    </View>
  );
};

const IMGScreen = ({ IMGURI }) => {
  return (
    <View
      style={{
        marginLeft: 10,
      }}>
      <Image style={styles.LargIMG} source={IMGURI} />
    </View>
  );
};
export default class MiniScreen extends Component {
  render() {
    let SrW = Dimensions.get('window').width;
    let SrH = Dimensions.get('window').height;
    return (
      <View
        style={{
          height: SrW / 2,
        }}>
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
            <IMGScreen IMGURI={this.props.IMGURI} />
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
