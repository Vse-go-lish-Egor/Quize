import React from 'react';
import styled from 'styled-components/native';
export interface TopBarProops {
  questionsCount: number;
  currentNumber: number;
}
export const TopBar = ({questionsCount, currentNumber}: TopBarProops) => {
  return (
    <TopBarContainer>
      <TopBarText>
        {questionsCount}/{currentNumber}
      </TopBarText>
    </TopBarContainer>
  );
};

const TopBarText = styled.Text`
  font-family: 'Pacifico';
  color: black;
  font-size: 25px;
`;
const TopBarContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;
