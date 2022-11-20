import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {QuestionModel} from '../hooks';

interface ClickedAnswer {
  clickedAnswer: string;
  isCorrect: boolean;
}
export const AnswerSelectionBlock = ({
  answers,
  onPressAnswer,
}: {
  answers: QuestionModel;
  onPressAnswer: (answer: string) => boolean;
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<ClickedAnswer>({
    clickedAnswer: '',
    isCorrect: false,
  });
  useEffect(
    () => setSelectedAnswer({clickedAnswer: '', isCorrect: false}),
    [answers],
  );
  return (
    <>
      {selectedAnswer.clickedAnswer.length ? (
        <AnswersContainer>
          <AnswerBlock>
            <AnswerSelectedText isCorrect={selectedAnswer.isCorrect}>
              {selectedAnswer.isCorrect ? 'правильно' : 'неправильно'}
            </AnswerSelectedText>
          </AnswerBlock>
        </AnswersContainer>
      ) : (
        <AnswersContainer>
          <FlatList
            keyExtractor={(item, index) =>
              item.toString() + index + answers.round
            }
            data={answers.answers}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      setSelectedAnswer({
                        clickedAnswer: item.authorName,
                        isCorrect: onPressAnswer(item.authorName),
                      })
                    }>
                    <AnswerBlock>
                      <AnswerText>
                        {index + 1}. {item.authorName}
                      </AnswerText>
                    </AnswerBlock>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </AnswersContainer>
      )}
    </>
  );
};
const AnswerSelectedText = styled.Text<{isCorrect: boolean}>`
  font-family: 'Pacifico';
  color: ${props => (props.isCorrect ? 'green' : 'red')};
  font-size: 25px;
`;
const AnswerText = styled.Text`
  font-family: 'Pacifico';
  color: black;
  font-size: 25px;
`;
const AnswerBlock = styled.View`
  flex: 1;
  align-items: flex-start;
  padding-left: 20px;
  justify-items: center;
`;
const AnswersContainer = styled.View`
  flex: 1;
`;
