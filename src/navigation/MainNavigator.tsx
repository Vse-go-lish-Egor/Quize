import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {QuizScreen} from '../screens/QuizScreen';
import {MenuScreen} from '../screens/Menu';
import {RatingsScreen} from '../screens/RatingsScreen';

export type RootStackParamList = {
  MenuScreen: undefined;
  QuizScreen: undefined;
  RatingsScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="RatingsScreen" component={RatingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
