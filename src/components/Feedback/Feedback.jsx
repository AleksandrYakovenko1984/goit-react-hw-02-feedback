import React from "react";

class Feedback extends React.Component {
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button>good</button>
          <button>neutral</button>
          <button>bad</button>
        </div>
      </div>
    );
  }
}

export default Feedback;
