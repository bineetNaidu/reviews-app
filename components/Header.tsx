import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  navigation: any;
}

const Header: React.FC<Props> = ({ navigation }) => {
  const handlePress = () => navigation.openDrawer();
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        style={styles.iconMenu}
        onPress={handlePress}
      />
      <View>
        <Text style={styles.headerText}>Reviews App</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'teal',
    letterSpacing: 1,
    flex: 1,
    textAlign: 'center',
  },
  iconMenu: {
    justifyContent: 'flex-start',
  },
});
