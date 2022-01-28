import styled from "styled-components";

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonItem = styled.button`
  color: white;
  font-size: 18px;
  background-color: blue;
  width: 100px;
  height: 25px;
  flex-basis: calc(50% / 3);

  &:hover {
    background-color: purple;
  }
`;

export const Request = styled.h2`
  font-size: 20px;
  text-align: center;
`;

export const Values = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const ValuesItem = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
