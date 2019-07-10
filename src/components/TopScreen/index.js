import React, { Component } from 'react';
import { View, Image, Dimensions, Text, ImageBackground } from 'react-native';
import styles from '@Component/TopScreen/styles';

import { Icon } from 'native-base';

export default class Top extends Component {
  render() {
    let SrW = Dimensions.get('window').width;
    let SrH = Dimensions.get('window').height;
    return (
      <View
        style={{
          borderRadius: 10,
          flex: 1,
          overflow: 'hidden',
          margin: 20,
        }}>
        <ImageBackground
          style={{
            width: SrW,
            height: SrW - 10,
          }}
          source={this.props.IMGS}>
          <View style={{ flex: 7 }} />
          <View
            style={{
              marginLeft: 10,
              justifyContent: 'flex-start',
              flex: 3,
            }}>
            <Text style={styles.Title}> {this.props.Title1}</Text>
            <Text style={styles.Title}> {this.props.Title2}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: SrW * 0.8,
                marginTop: 20,
                marginLeft: SrH * 0.4 * 0.02,
              }}>
              <Text style={styles.Trip}> {this.props.Trip}</Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Icon style={styles.Icons} name="back-in-time" type="Entypo" />
                <Text style={styles.Trip}> {this.props.Time}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

// export default class Top extends Component {
//   render() {
//     let SrW = Dimensions.get('window').width;
//     let SrH = Dimensions.get('window').height;
//     return (
//       <View
//         style={{
//           width: SrW,
//           height: SrH * 0.4,
//           margin: 20,
//           borderRadius: 10,
//           position: 'absolute',
//         }}>
//         <Image style={styles.LargIMG} source={require('@Asset/images/IMG1.png')} />
//         <View
//           style={{
//             justifyContent: 'center',
//             alignItems: 'flex-start',
//             top: -(SrH * 0.4) * 0.3,
//             marginLeft: SrW * 0.02,
//           }}>
//           <Text style={styles.Title}> Where to See the Biggest</Text>
//           <Text style={styles.Title}> Whales In the World</Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               width: SrW * 0.8,
//               marginTop: SrH * 0.4 * 0.01,
//               marginLeft: SrH * 0.4 * 0.02,
//             }}>
//             <Text style={styles.Trip}> Travel</Text>
//             <View
//               style={{
//                 flexDirection: 'row',
//               }}>
//               <Icon style={styles.Icons} name="back-in-time" type="Entypo" />
//               <Text style={styles.Trip}> Saturday at 12:00 PM</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }
