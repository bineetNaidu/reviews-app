import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const { Navigator, Screen } = createStackNavigator();

const options = {
  headerStyle: { backgroundColor: 'teal' },
};

const HomeNavigator: React.FC = () => (
  <Navigator headerMode="float">
    {/* other options: "float", "screen" */}
    <Screen name="Home" component={Home} options={options} />
    <Screen name="ReviewsDetails" component={ReviewDetails} options={options} />
  </Navigator>
);

export const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
