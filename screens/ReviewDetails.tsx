import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

type RootStackParamList = {
  Home: undefined;
  ReviewsDetails: {
    title: string;
    rating: number;
    body: string;
    key: string | number;
  };
};

import { RouteProp } from '@react-navigation/native';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'ReviewsDetails'>;

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
interface Props {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
}

const ReviewDetails: React.FC<Props> = ({ navigation, route }) => {
  const handlePress = () => navigation.push('Home');
  const { title, body, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails</Text>
      <View style={globalStyles.container}>
        {title && body && rating && (
          <>
            <Text>{title}</Text>
            <Text>{rating}</Text>
            <Text>{body}</Text>
          </>
        )}
      </View>
      <Button onPress={handlePress} title="Go Back" />
    </View>
  );
};

export default ReviewDetails;
