import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import BiodataScreen from '../screens/BiodataScreen';
import KontakScreen from '../screens/KontakScreen';
import TentangScreen from '../screens/TentangScreen';
import HobiScreen from '../screens/HobiScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptionsWithAnimation = {
  ...TransitionPresets.SlideFromRightIOS,
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#ADD8E6' },
        tabBarActiveTintColor: '#00008B',
        tabBarInactiveTintColor: '#FFFFFF',
      }}
    >
      <Tab.Screen name="Biodata" component={BiodataScreen} />
      <Tab.Screen name="Kontak" component={KontakScreen} />
      <Tab.Screen name="Tentang" component={TentangScreen} />
      <Tab.Screen name="Hobi" component={HobiScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionsWithAnimation}>
        <Stack.Screen 
          name="Home"
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;