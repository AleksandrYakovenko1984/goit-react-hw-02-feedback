import React from "react";
import { ButtonsContainer, ButtonItem } from "./Feedback.styled";

const FeedbackOptions = ({ onSetReview1, onSetReview2, onSetReview3 }) => (
  <ButtonsContainer>
    <ButtonItem type="button" onClick={onSetReview1}>
      good
    </ButtonItem>
    <ButtonItem type="button" onClick={onSetReview2}>
      neutral
    </ButtonItem>
    <ButtonItem type="button" onClick={onSetReview3}>
      bad
    </ButtonItem>
  </ButtonsContainer>
);
export default FeedbackOptions;
