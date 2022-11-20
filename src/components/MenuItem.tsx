import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {RootStackParamList} from '../navigation/MainNavigator';
import PurpleBookIcon from '../assets/PurpleBookIcon.svg';
import BlueBookIcon from '../assets/BlueBookIcon.svg';
export const MenuItem = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <CircleItem>
      <BookIconsContainer>
        <TouchableIconConteiner>
          <TouchableOpacity onPress={() => navigate('QuizScreen')}>
            <BlueBookIcon width={155} height={155} />
            <BooksItemText>Начать</BooksItemText>
          </TouchableOpacity>
        </TouchableIconConteiner>
        <TouchableIconConteiner>
          <TouchableOpacity onPress={() => navigate('RatingsScreen')}>
            <PurpleBookIcon width={155} height={155} />
            <BooksItemText>Таблица очков</BooksItemText>
          </TouchableOpacity>
        </TouchableIconConteiner>
      </BookIconsContainer>
    </CircleItem>
  );
};
const BooksItemText = styled.Text`
  position: absolute;
  align-self: center;
  width: 100;
  font-size: 20;
  text-align: center;
  font-family: 'Pacifico';
  padding-top: 30;
  padding-left: 15;
  color: white;
`;
const TouchableIconConteiner = styled.View`
  flex: 1;
  height: 20;
  align-items: center;
  justify-content: center;
`;
const BookIconsContainer = styled.View`
  flex-direction: row;
`;
const CircleItem = styled.View`
  width: 350;
  height: 350;
  border-radius: 175;
  align-items: center;
  opacity: 0.9;
  justify-content: center;
  background-color: #c6b8a6;
`;
