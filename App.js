import React from 'react';
import Screens from '@Screen/index';
import TopScreen from '@Component/TopScreen';
import { View, ScrollView, Dimensions } from 'react-native';
import MiniScreen from '@Component/MiniScreen';
import MiniVideoScreen from '@Component/MiniVideoScreen';
export default function App() {
  let SrW = Dimensions.get('window').width;
  return (
    <ScrollView>
      <TopScreen
        IMGS={require('@Asset/images/IMG1.png')}
        Title1="Where to See the Biggest"
        Title2="Whales In the World"
        Time="Saturday at 12:00 PM"
        Trip="Travel"
      />

      <MiniScreen
        Kind="Travel"
        Title="Top 10 Yoga paths you could take to be stress free today"
        Trip="Lorem ipsum dolor sit amet, his last consectetur adipiscing elit..."
        Time="Saturday at 12:00 PM "
        IMGURI={require('@Asset/images/IMG2.png')}
      />
      <MiniScreen
        Kind="Travel"
        Title="The tailor from outer space or the incredible"
        Trip="Lorem ipsum dolor sit amet, his last consectetur adipiscing elit..."
        Time="Saturday at 12:00 PM "
        IMGURI={require('@Asset/images/IMG3.png')}
      />
      <MiniScreen
        Kind="Travel"
        Title="Top 10 Yoga paths you could take to be stress free today"
        Trip="Lorem ipsum dolor sit amet, his last consectetur adipiscing elit..."
        Time="Saturday at 12:00 PM "
        IMGURI={require('@Asset/images/IMG4.png')}
      />
      <MiniScreen
        Kind="Travel"
        Title="Deep Love Quotes: For When You Can’t Find The Words To Express How You Feel"
        Trip="Lorem ipsum dolor sit amet, his last consectetur adipiscing elit..."
        Time="Saturday at 12:00 PM "
        IMGURI={require('@Asset/images/IMG1.png')}
      />
      <MiniScreen
        Kind="Travel"
        Title="Top 10 Yoga paths you could take to be stress free today"
        Trip="Lorem ipsum dolor sit amet, his last consectetur adipiscing elit..."
        Time="Saturday at 12:00 PM "
        IMGURI={require('@Asset/images/IMG3.png')}
      />
    </ScrollView>
  );
}
