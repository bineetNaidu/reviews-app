import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card: React.FC = ({ children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    padding: 10,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    margin: 3,
    shadowRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'nunito-regular',
  },
});
