import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import Header from '../components/Header';

const { Navigator, Screen } = createDrawerNavigator();
interface Props {
  navigation: any;
}

export const RootDrawerNavigator: React.FC<Props> = ({ navigation }) => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{ header: () => () => <Header navigation={navigation} /> }}
  >
    <Screen name="Home" component={HomeStack} />
    <Screen name="About" component={AboutStack} />
  </Navigator>
);

export const AppNavigator: React.FC<Props> = ({ navigation }) => (
  <NavigationContainer>
    <RootDrawerNavigator navigation={navigation} />
  </NavigationContainer>
);
