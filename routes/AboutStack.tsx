import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';

const { Navigator, Screen } = createStackNavigator();

const options = {
  headerStyle: { backgroundColor: 'teal' },
};
export const AboutStack = () => (
  <Navigator headerMode="screen" screenOptions={options}>
    <Screen name="About" component={About} />
  </Navigator>
);

export default AboutStack;
