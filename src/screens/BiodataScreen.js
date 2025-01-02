import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BiodataScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biodata</Text>
      <Text style={styles.text}>Nama: Zacky Argya Tarigan</Text>
      <Text style={styles.text}>Umur: 18</Text>
      <Text style={styles.text}>Alamat: Pekanbaru, Indonesia</Text>
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

export default BiodataScreen;