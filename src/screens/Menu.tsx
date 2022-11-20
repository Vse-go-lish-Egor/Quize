import React from 'react';
import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';
import {MenuItem} from '../components/MenuItem';
// interface MenuScreenProps {
// navigation: NativeStackNavigationProp<RootStackParamList>;
// }
export const MenuScreen = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/BookBackground.jpg')}
      resizeMode={'cover'}>
      <ScreenView>
        <MenuItem />
      </ScreenView>
    </ImageBackground>
  );
};
const ScreenView = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
