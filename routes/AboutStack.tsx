import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../components/Header';

const { Navigator, Screen } = createStackNavigator();
interface Props {
  navigation: any;
}

export const AboutStack: React.FC<Props> = ({ navigation }) => (
  <Navigator
    headerMode="screen"
    screenOptions={{ headerTitle: () => <Header navigation={navigation} /> }}
  >
    <Screen name="About" component={About} />
  </Navigator>
);

export default AboutStack;
