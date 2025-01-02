import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const KontakScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kontak</Text>
      <Text style={styles.text}>Email: john.doe@example.com</Text>
      <Text style={styles.text}>Telepon: +62 812 3456 7890</Text>
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

export default KontakScreen;