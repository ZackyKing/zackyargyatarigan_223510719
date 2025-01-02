// src/screens/DetailsScreen.js

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Details" subtitle="Learn More" />
        <Card.Content>
          <Text style={styles.text}>This is the details screen with more information.</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  card: {
    width: '90%',
    padding: 10,
  },
});

export default DetailsScreen;
