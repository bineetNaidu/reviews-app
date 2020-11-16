import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator: React.FC = () => (
  <Navigator headerMode="none">
    {/* other options: "float", "screen" */}
    <Screen name="ReviewsDetails" component={ReviewDetails} />
    <Screen name="Home" component={Home} />
  </Navigator>
);

export const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
