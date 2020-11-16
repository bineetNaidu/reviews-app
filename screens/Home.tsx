import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

type RootStackParamList = {
  Home: undefined;
  ReviewsDetails: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
interface Props {
  navigation: ProfileScreenNavigationProp;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const handlePress = () => navigation.navigate('ReviewsDetails');
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button onPress={handlePress} title="go to reviews details" />
    </View>
  );
};

export default Home;
