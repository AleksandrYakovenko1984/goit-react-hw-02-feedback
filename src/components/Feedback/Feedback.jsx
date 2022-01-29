import React from "react";
import {
  FeedbackContainer,
  ButtonsContainer,
  Request,
  Values,
  ButtonItem,
  ValuesItem,
} from "./Feedback.styled";
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodReview = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutralReview = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  badReview = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    this.setState(() => {
      return {};
    });
  };

  countPositiveFeedbackPercentage = () => {};
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <FeedbackContainer>
        <Request>Please leave feedback</Request>
        <ButtonsContainer>
          <ButtonItem type="button" onClick={this.goodReview}>
            good
          </ButtonItem>
          <ButtonItem type="button" onClick={this.neutralReview}>
            neutral
          </ButtonItem>
          <ButtonItem type="button" onClick={this.badReview}>
            bad
          </ButtonItem>
        </ButtonsContainer>
        <Values>
          <ValuesItem>good: {good}</ValuesItem>
          <ValuesItem>neutral: {neutral}</ValuesItem>
          <ValuesItem>bad: {bad}</ValuesItem>
          <ValuesItem>total:{good + neutral + bad}</ValuesItem>
          <ValuesItem>positive feedback:</ValuesItem>
        </Values>
      </FeedbackContainer>
    );
  }
}

export default Feedback;
