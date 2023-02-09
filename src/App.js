import React from 'react';
import styled from 'styled-components';

const Grid5Container = styled.div`
  display: ${(props) => props.display};
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 1.25rem;
  margin: 2rem 0;
`;

const StBox = styled.div`
  //이 안에 스타일 코드가 들어간다.
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  border-radius: 1rem;
  margin: 1rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`;

const boxColorObj = [
  { color: 'white', bg: 'Darkturquoise' },
  { color: 'black', bg: 'Yellowgreen' },
  { color: 'yellow', bg: 'Tomato' },
];
const getColorTxt = (color) => {
  switch (color) {
    case 'Darkturquoise':
      return '파란색';
    case 'Yellowgreen':
      return '노란색';
    case 'Tomato':
      return '빨간색';
    default:
      return '검은색';
  }
};

function App() {
  return (
    <>
      <Grid5Container display="grid">
        {boxColorObj.map((item) => {
          return (
            <StBox color={item.color} backgroundColor={item.bg}>
              {getColorTxt(item)}
            </StBox>
          );
        })}
      </Grid5Container>
    </>
  );
}

export default App;
