import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
    </View>
  );
};

export default Home;
