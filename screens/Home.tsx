import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../components/Card';
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

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
interface Props {
  navigation: ProfileScreenNavigationProp;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const [reviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewsDetails', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
