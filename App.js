import React from 'react';
import Screens from '@Screen/index';
import TopScreen from '@Component/TopScreen';
import { View } from 'react-native';
import MiniScreen from '@Component/MiniScreen';
export default function App() {
  return (
    <View>
      <View>
        <TopScreen />
      </View>
      <MiniScreen />
    </View>
  );
}
