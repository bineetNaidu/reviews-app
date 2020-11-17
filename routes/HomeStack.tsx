import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../components/Header';

const { Navigator, Screen } = createStackNavigator();

interface Props {
  navigation: any;
}

const HomeNavigator: React.FC<Props> = ({ navigation }) => (
  <Navigator headerMode="float">
    {/* other options: "float", "screen" */}
    <Screen
      name="Home"
      component={Home}
      options={{ headerTitle: () => <Header navigation={navigation} /> }}
    />
    <Screen name="ReviewsDetails" component={ReviewDetails} />
  </Navigator>
);

export default HomeNavigator;
