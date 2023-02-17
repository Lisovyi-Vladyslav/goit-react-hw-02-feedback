import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section'
import { Notification } from 'components/Notification/Notification'
import { Component } from 'react';
import feedbackOptions from 'feedbackOptions.json';

 export class App extends Component {
   state = {
  good: 0,
  neutral: 0,
     bad: 0,
     total: 0,
     positiveFeedbackPercentage: 0,
   }
   
   countPositiveFeedbackPercentage = () => {
  this.setState(prevState => {
    return {positiveFeedbackPercentage:  Math.round((prevState.good * 100) / prevState.total.toFixed(5)) + "%"}
  });
  };

   countTotalFeedback = () => {
     this.setState(prevState => {
      return {total: prevState.good + prevState.neutral + prevState.bad}
    });
      this.countPositiveFeedbackPercentage();
  } 

   handleClick = event => {
     const { name } = event.target;
     this.setState(prevState => ({
       [name]: prevState[name] + 1,
     }));
      this.countTotalFeedback();
   };
   
  render() {
    const { good, neutral, bad, total, positiveFeedbackPercentage } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={feedbackOptions}  onLeaveFeedback={this.handleClick}/> 
        </Section>
         {total === 0 ? (
        <Notification message="There is no feedback"/>
      ) : (
        <Section title="Statics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positiveFeedbackPercentage} />
        </Section>
      )}
      </>
          
    );
  }
}
