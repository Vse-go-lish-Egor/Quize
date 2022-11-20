import React from 'react';
import styled from 'styled-components/native';

export const QuestionBlock = ({question}: {question: string}) => {
  return (
    <QuestionContainer>
      <QuestionsText>{question}</QuestionsText>
    </QuestionContainer>
  );
};
const QuestionContainer = styled.View`
  flex: 1.25;
`;
const QuestionsText = styled.Text`
  align-self: center;
  margin-right: 30px;
  color: black;
  margin-left: 30px;
  font-family: 'SweetMavkaScript';
  font-size: 20px;
`;
