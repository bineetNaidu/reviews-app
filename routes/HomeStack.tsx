import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const { Navigator, Screen } = createStackNavigator();

const options = {
  headerStyle: { backgroundColor: 'teal' },
};
const HomeNavigator: React.FC = () => (
  <Navigator headerMode="float" screenOptions={options}>
    {/* other options: "float", "screen" */}
    <Screen name="Home" component={Home} />
    <Screen name="ReviewsDetails" component={ReviewDetails} />
  </Navigator>
);

export default HomeNavigator;
