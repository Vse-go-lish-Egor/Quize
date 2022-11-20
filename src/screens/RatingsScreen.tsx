import React from 'react';
import {FlatList, ImageBackground, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Result} from '../API';
import Loading from '../components/Loading';
import {useGetData} from '../hooks';

export const RatingsScreen = () => {
  const {data, isLoading} = useGetData('rating');
  return (
    <ResultsView>
      <ImageBackground
        style={styles.backgrounds}
        source={require('../assets/BookBackground.jpg')}
        resizeMode={'cover'}>
        {isLoading ? (
          <Loading />
        ) : (
          <ImageBackground
            source={require('../assets/BackgroundQuizScreen.png')}
            resizeMode={'stretch'}
            style={styles.backgroundsPaper}>
            <FlatList
              style={styles.list}
              data={data as Result[]}
              renderItem={({item}) => (
                <ScoreView>
                  <ResultText>{item.name}</ResultText>
                  <Spacer />
                  <ResultText>{item.result}</ResultText>
                </ScoreView>
              )}
            />
          </ImageBackground>
        )}
      </ImageBackground>
    </ResultsView>
  );
};
const Spacer = styled.View`
  flex: 1;
`;
const ScoreView = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  border-bottom-width: 3px;
`;
const ResultsView = styled.View`
  flex: 1;
`;
const styles = StyleSheet.create({
  backgrounds: {
    flex: 1,
  },
  backgroundsPaper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  list: {
    flex: 1,
    marginLeft: 60,
    marginTop: 30,
    marginRight: 30,
  },
});
const ResultText = styled.Text`
  font-family: 'Pacifico';
  color: black;
  font-size: 25px;
`;
