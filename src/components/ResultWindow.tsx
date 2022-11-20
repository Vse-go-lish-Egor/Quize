import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {putResult} from '../API';
import {RootStackParamList} from '../navigation/MainNavigator';

export const ResultWindow = ({
  numberOfCorrectAnswers,
}: {
  numberOfCorrectAnswers: number;
}) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');
  return (
    <ResultView>
      <ResultText>Верных ответов: {numberOfCorrectAnswers}</ResultText>
      <ResultText>Введите Ваш ник:</ResultText>
      <NameInput
        onChangeText={value => setName(value)}
        placeholder="Введите ник"
      />
      <TouchableOpacity
        onPress={() =>
          name.length &&
          putResult({name, result: numberOfCorrectAnswers}).then(() =>
            navigate('MenuScreen'),
          )
        }>
        <SaveButton>
          <ResultText>Сохранить результат</ResultText>
        </SaveButton>
      </TouchableOpacity>
    </ResultView>
  );
};
const SaveButton = styled.View`
  border-width: 3px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #dac8b4;
`;
const ResultView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const NameInput = styled.TextInput`
  font-family: 'Pacifico';
  font-size: 20px;
  border-bottom-color: black;
  border-bottom-width: 3px;
`;
const ResultText = styled.Text`
  font-family: 'Pacifico';
  color: black;
  font-size: 25px;
`;
