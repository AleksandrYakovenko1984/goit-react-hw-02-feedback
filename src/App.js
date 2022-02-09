import React from "react";
import FeedbackOptions from "./components/Feedback/FeedbackOptions";
import Statistics from "./components/Feedback/Statistics";
import {
  FeedbackContainer,
  Request,
  NoInfoValues,
} from "./components/Feedback/Feedback.styled";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setReview = (param) => {
    this.setState((prevState) => {
      return {
        [param]: prevState[param] + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad)
    );
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <FeedbackContainer>
        <Request>Please leave feedback</Request>

        <FeedbackOptions
          onSetReview1={() => this.setReview("good")}
          onSetReview2={() => this.setReview("neutral")}
          onSetReview3={() => this.setReview("bad")}
        />

        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={Math.floor(
              this.countPositiveFeedbackPercentage()
            )}
          />
        ) : (
          <NoInfoValues>no feedback given</NoInfoValues>
        )}
      </FeedbackContainer>
    );
  }
}

export default App;
