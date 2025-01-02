import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HobiScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hobi</Text>
      <Text style={styles.text}>- Membaca</Text>
      <Text style={styles.text}>- Menulis</Text>
      <Text style={styles.text}>- Bersepeda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00008B',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#00008B',
    marginVertical: 5,
  },
});

export default HobiScreen;