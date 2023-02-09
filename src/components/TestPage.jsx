import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  padding: 1rem;
  border-radius: 1rem;
  margin: 1rem;
`;

const Title = styled.h1`
  color: ${(props) => props.color};
  margin-bottom: 0.5rem;
`;

const Content = styled.p`
  line-height: 1.5;
  font-size: 1rem;
  margin: 0;
`;

const TestPage = ({ title, contents, textColor, borderColor }) => {
  return (
    <Wrapper borderColor={borderColor}>
      <Title color={textColor}>{title}</Title>
      <Content>{contents}</Content>
    </Wrapper>
  );
};

export default TestPage;
