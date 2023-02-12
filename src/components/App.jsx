import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

const App = () => {
  const buttonsFeedback = ['good', 'neutral', 'bad'];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const hendlerClick = typeButtom => {
    switch (typeButtom) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        console.log('Error type');
    }
  };

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttonsFeedback}
          onLeaveFeedback={hendlerClick}
        />
      </Section>

      <Section title="Statistics">
        <Statistics goodValue={good} neutralValue={neutral} badValue={bad} />
      </Section>
    </div>
  );
};

export default App;
