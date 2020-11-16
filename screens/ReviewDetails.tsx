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

const ReviewDetails: React.FC<Props> = ({ navigation }) => {
  const handlePress = () => navigation.goBack();
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails</Text>
      <Button onPress={handlePress} title="Go Back" />
    </View>
  );
};

export default ReviewDetails;
