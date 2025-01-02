// src/screens/HomeScreen.js

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Button as DesignButton } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Welcome to React Native" subtitle="Home Screen" />
        <Card.Content>
          <Text style={styles.text}>Explore the power of React Native!</Text>
        </Card.Content>
        <Card.Actions>
          <DesignButton
            mode="contained"
            onPress={() => navigation.navigate('Details')}
          >
            Go to Details
          </DesignButton>
        </Card.Actions>
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

export default HomeScreen;