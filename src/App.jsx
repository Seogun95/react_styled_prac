import React from 'react';
import TestPage from './components/TestPage';
import GlobalStyle from './components/GlobalStyle.jsx';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <FlexDiv>
        <TestPage
          title={'안녕'}
          contents={'hello, wolrd'}
          borderColor={'Tomato'}
          textColor={'YellowGreen'}
        />
        <TestPage
          title={'어서오세요'}
          contents={'hello, There'}
          borderColor={'YellowGreen'}
          textColor={'tomato'}
        />
      </FlexDiv>
    </>
  );
}

export default App;
