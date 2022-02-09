import styled from "styled-components";

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: -10px;
`;

export const ButtonItem = styled.button`
  color: white;
  font-size: 18px;
  background-color: #21e0ed;
  width: 70px;
  height: 40px;
  flex-basis: calc(50% / 3);
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #35afb8;
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
  padding: 20px 0;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;
export const ValuesItem = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  justify-content: center;
`;
export const NoInfoValues = styled.span`
  padding: 20px 0;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: red;
`;
