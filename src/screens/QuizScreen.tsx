import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Quotes} from '../API';
import {AnswerSelectionBlock} from '../components/AnswerSelectionBlock';
import Loading from '../components/Loading';
import {QuestionBlock} from '../components/Question';
import {ResultWindow} from '../components/ResultWindow';
import {TopBar} from '../components/TopBar';
import {useGetData, useSetQuoteModel} from '../hooks';

export const QuizScreen = () => {
  const {data, isLoading} = useGetData('quotes');
  const {questionModel, setSelectAnswer, numberOfCorrectAnswers} =
    useSetQuoteModel(data as Quotes[]);
  return (
    <ScreenView>
      <ImageBackground
        style={styles.backgrounds}
        source={require('../assets/BookBackground.jpg')}
        resizeMode={'cover'}>
        {isLoading ? (
          <Loading />
        ) : (
          <ImageBackground
            style={styles.backgrounds}
            source={require('../assets/BackgroundQuizScreen.png')}
            resizeMode={'stretch'}>
            {questionModel.round > data.length ? (
              <ResultWindow numberOfCorrectAnswers={numberOfCorrectAnswers} />
            ) : (
              <>
                <TopBar
                  currentNumber={data.length}
                  questionsCount={questionModel.round}
                />
                <QuestionBlock question={questionModel.question.quote} />
                <AnswerSelectionBlock
                  answers={questionModel}
                  onPressAnswer={answer => setSelectAnswer(answer)}
                />
              </>
            )}
          </ImageBackground>
        )}
      </ImageBackground>
    </ScreenView>
  );
};

const ScreenView = styled.View`
  flex: 1;
  flex-direction: column;
`;
const styles = StyleSheet.create({
  backgrounds: {
    flex: 1,
  },
});
